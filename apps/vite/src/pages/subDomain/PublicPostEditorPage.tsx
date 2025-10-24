import type React from "react";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import { Badge } from "@repo/ui/components/badge";
import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Label } from "@repo/ui/components/label";
import {
  Bold,
  Italic,
  Underline,
  Link2,
  ImageIcon,
  List,
  ListOrdered,
  Quote,
  Code,
  Eye,
  Save,
  Send,
  X,
  Plus,
  ArrowLeft,
  Heading,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { usePostImageMutation } from "../../state/api/postApi";

export default function PublicPostEditorPage() {
  // const [content, setContent] = useState("");
  const [postImage] = usePostImageMutation();
  const [tags, setTags] = useState<string[]>([]);
  const [featuredImage, setFeaturedImage] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const tagsRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const excerptRef = useRef<HTMLTextAreaElement | null>(null);

  const handleAddTag = () => {
    if (!tagsRef.current) {
      return;
    }
    if (tags.length >= 4) {
      alert("You can only add up to 4 tags.");
      return;
    }
    if (
      tagsRef.current.value.trim() &&
      !tags.includes(tagsRef.current.value.trim())
    ) {
      setTags([...tags, tagsRef.current.value.trim()]);
      tagsRef.current.value = "";
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFeaturedImage(url);
    }
  };

  const insertFormatting = (type: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;
    const selectedText = value.slice(start, end);

    let newValue = value;
    let newCursorStart = start;
    let newCursorEnd = end;

    // helper to safely slice with bounds
    const sliceSafe = (s: number, e: number) =>
      value.slice(Math.max(0, s), Math.min(value.length, e));

    // ---------- BOLD ----------
    if (type === "bold") {
      const prefix = "**";
      const suffix = "**";

      // Surrounding chars (when user selected inner text)
      const before = sliceSafe(start - prefix.length, start);
      const after = sliceSafe(end, end + suffix.length);
      const surroundingWrapped = before === prefix && after === suffix;

      // Case: user selected the whole wrapped string, like "**hello**"
      const selectionWrapped =
        selectedText.startsWith(prefix) && selectedText.endsWith(suffix);

      if (surroundingWrapped) {
        // user selected inner text (e.g. selected "hello" inside **hello**)
        newValue =
          value.slice(0, start - prefix.length) +
          selectedText +
          value.slice(end + suffix.length);
        newCursorStart = start - prefix.length;
        newCursorEnd = newCursorStart + selectedText.length;
      } else if (selectionWrapped) {
        // user selected the whole wrapped string (e.g. selected "**hello**")
        // unwrap by removing prefix/suffix from the selection
        const inner = selectedText.slice(
          prefix.length,
          selectedText.length - suffix.length
        );
        newValue = value.slice(0, start) + inner + value.slice(end);
        newCursorStart = start;
        newCursorEnd = start + inner.length;
      } else if (selectedText.length > 0) {
        // apply bold around selection
        newValue =
          value.slice(0, start) +
          prefix +
          selectedText +
          suffix +
          value.slice(end);
        // keep selection around the inner text
        newCursorStart = start + prefix.length;
        newCursorEnd = end + prefix.length;
      } else {
        // no selection => insert **|**
        newValue = value.slice(0, start) + prefix + suffix + value.slice(end);
        newCursorStart = start + prefix.length;
        newCursorEnd = newCursorStart;
      }
    }

    // ---------- ITALIC ----------
    if (type === "italic") {
      const prefix = "*";
      const suffix = "*";

      const before = sliceSafe(start - prefix.length, start);
      const after = sliceSafe(end, end + suffix.length);
      const surroundingWrapped = before === prefix && after === suffix;

      const selectionWrapped =
        selectedText.startsWith(prefix) && selectedText.endsWith(suffix);

      if (surroundingWrapped) {
        // selected inner text inside *...*
        newValue =
          value.slice(0, start - prefix.length) +
          selectedText +
          value.slice(end + suffix.length);
        newCursorStart = start - prefix.length;
        newCursorEnd = newCursorStart + selectedText.length;
      } else if (selectionWrapped) {
        // selected the whole *...*
        const inner = selectedText.slice(
          prefix.length,
          selectedText.length - suffix.length
        );
        newValue = value.slice(0, start) + inner + value.slice(end);
        newCursorStart = start;
        newCursorEnd = start + inner.length;
      } else if (selectedText.length > 0) {
        // apply italic
        newValue =
          value.slice(0, start) +
          prefix +
          selectedText +
          suffix +
          value.slice(end);
        newCursorStart = start + prefix.length;
        newCursorEnd = end + prefix.length;
      } else {
        // insert *|*
        newValue = value.slice(0, start) + prefix + suffix + value.slice(end);
        newCursorStart = start + prefix.length;
        newCursorEnd = newCursorStart;
      }
    }

    // ---------- LINK (unchanged from your desired behavior, but keep it robust) ----------
    if (type === "link") {
      // Use patterns: [text](url)
      const matchLink = /^\[(.*)\]\((.*)\)$/s; // full-match for selection
      if (matchLink.test(selectedText)) {
        // if selection is full link, unwrap to inner text
        const inner = selectedText.replace(matchLink, "$1");
        newValue = value.slice(0, start) + inner + value.slice(end);
        newCursorStart = start;
        newCursorEnd = start + inner.length;
      } else if (selectedText.length > 0) {
        // wrap selected text and place cursor on url
        newValue =
          value.slice(0, start) + `[${selectedText}](url)` + value.slice(end);
        // position cursor selecting 'url' so typing replaces it
        const urlStart = start + 1 + selectedText.length + 2; // [, text, ](  -> positions
        newCursorStart = urlStart;
        newCursorEnd = urlStart + 3; // select 'url'
      } else {
        // no selection: insert [](url) and select url
        newValue = value.slice(0, start) + "[](url)" + value.slice(end);
        const urlStart = start + 3; // after [](
        newCursorStart = urlStart;
        newCursorEnd = urlStart + 3;
      }
    }

    // ---------- HEADING (unchanged) ----------
    if (type === "heading") {
      const beforeText = value.slice(0, start);
      const lineStart = beforeText.lastIndexOf("\n") + 1;
      const lineEnd =
        value.indexOf("\n", lineStart) === -1
          ? value.length
          : value.indexOf("\n", lineStart);
      const line = value.slice(lineStart, lineEnd);

      const headingLevels = ["## ", "### ", "#### "];
      const currentLevel = headingLevels.findIndex((lvl) =>
        line.startsWith(lvl)
      );
      let newPrefix = "";

      if (currentLevel === -1) newPrefix = "## ";
      else if (currentLevel < headingLevels.length - 1)
        newPrefix = headingLevels[currentLevel + 1];
      else newPrefix = ""; // clear heading

      const lineWithoutHeading = line.replace(/^#{2,4}\s*/, "");
      const replacedLine = newPrefix + lineWithoutHeading;

      newValue =
        value.slice(0, lineStart) + replacedLine + value.slice(lineEnd);
      // place cursor at end of the heading line
      newCursorStart = lineStart + replacedLine.length;
      newCursorEnd = newCursorStart;
    }

    // If nothing changed in branches above (type not matched), keep original
    // Apply final result
    textarea.value = newValue;
    textarea.focus();
    textarea.setSelectionRange(newCursorStart, newCursorEnd);
    // setContent(newValue);
    // textareaRef.current is non-null here because we returned early if it was null
    // update ref value explicitly
    textareaRef.current!.value = newValue;
  };
  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileType = file.type.split("/")[1];
    try {
      const response = await postImage({ filetype: fileType }).unwrap();
      const imageUrl = response.filename;
      console.log(imageUrl);
    } catch (err) {
      console.log(err);
    }
  }; //TODO: add image in real time

  const handleSave = () => {
    console.log("[v0] Saving post as draft");
    // Save logic here
  }; //TODO: handle to save as draft

  const handlePublish = () => {
    if (
      textareaRef.current!.value.trim() === "" ||
      titleRef.current!.value.trim() === "" ||
      excerptRef.current!.value.trim() === "" ||
      tags.length === 0
    ) {
      return;
    }
    const postData = {
      title: titleRef.current!.value.trim(),
      excerpt: excerptRef.current!.value.trim(),
      content: textareaRef.current!.value.trim(),
      tags,
      featuredImage,
    };
    console.log("[v0] Publishing post:", postData);
  }; // TODO: handle to publish

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild className="px-2">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
            <h1 className="hidden sm:block text-xl font-semibold text-muted-foreground">
              Write a New Post
            </h1>
          </div>

          {/* Button group */}
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none"
              onClick={() => setIsPreview(!isPreview)}
            >
              <Eye className="mr-2 h-4 w-4" />
              {isPreview ? "Edit" : "Preview"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none"
              onClick={handleSave}
            >
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button
              size="sm"
              className="flex-1 sm:flex-none bg-gradient-to-r from-blue-500 to-blue-600 text-white"
              onClick={handlePublish}
            >
              <Send className="mr-2 h-4 w-4" />
              Publish
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`${isPreview ? "hidden" : "block"} space-y-8`}>
              {/* Cover Image */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Cover Image</Label>
                {!featuredImage ? (
                  <label
                    htmlFor="cover-upload"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-muted-foreground/30 rounded-xl cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors"
                  >
                    <Plus className="w-10 h-10 text-muted-foreground/70" />
                    <span className="text-sm text-muted-foreground mt-2">
                      Click to upload cover image
                    </span>
                    <input
                      id="cover-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative rounded-lg overflow-hidden group">
                    <img
                      src={featuredImage}
                      alt="Cover Preview"
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setFeaturedImage("")}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Post Title</Label>
                <Input
                  placeholder="Enter your post title..."
                  ref={titleRef}
                  className="text-2xl font-bold border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-sm font-medium">
                  Short Description
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your post..."
                  ref={excerptRef}
                  className="resize-none rounded-md px-3 py-2 border focus-visible:ring-2 focus-visible:ring-primary"
                  rows={3}
                />
              </div>

              {/* Tags */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Tags</Label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type a tag and press Enter"
                    ref={tagsRef}
                    onKeyDown={handleKeyPress}
                    className="rounded-md px-3 py-2 border focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-2 p-3 border rounded-lg bg-muted/50">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("heading")}
                  aria-label="Heading"
                >
                  <Heading className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("bold")}
                  aria-label="Bold"
                >
                  <Bold className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("italic")}
                  aria-label="Italic"
                >
                  <Italic className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("link")}
                  aria-label="Link"
                >
                  <Link2 className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("ul")}
                  aria-label="Unordered list"
                >
                  <List className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("ol")}
                  aria-label="Ordered list"
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("quote")}
                  aria-label="Blockquote"
                >
                  <Quote className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => insertFormatting("code")}
                  aria-label="Code"
                >
                  <Code className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  aria-label="Add image"
                >
                  <label
                    htmlFor="image-upload"
                    className="flex items-center cursor-pointer"
                  >
                    <ImageIcon className="h-4 w-4" />
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleAddImage}
                      className="hidden"
                    />
                  </label>
                </Button>
              </div>

              {/* Content Editor */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Post Content</Label>
                <Textarea
                  ref={textareaRef}
                  placeholder="Start writing your article here..."
                  className="min-h-[400px] resize-none border-none   px-3 py-2 text-base leading-relaxed focus-visible:ring-0"
                />
              </div>

              {/* <div className="space-y-3">
                <label className="sr-only">Post Content</label>
                <Textarea
                  ref={textareaRef}
                  placeholder="Start writing your post..."
                  className="min-h-[400px] resize-none border-none px-0 focus-visible:ring-0 text-base leading-relaxed"
                />
              </div> */}
            </div>

            {isPreview && (
              /* Preview Mode */
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {featuredImage && (
                      <div className="aspect-video relative overflow-hidden rounded-lg">
                        <img
                          src={featuredImage}
                          alt="Featured"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h1 className="text-3xl font-bold mb-4">
                        {titleRef.current?.value || "Untitled Post"}
                      </h1>
                      {excerptRef.current?.value && (
                        <p className="text-lg text-muted-foreground mb-6">
                          {excerptRef.current?.value}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="prose max-w-none dark:prose-invert">
                      <ReactMarkdown>
                        {textareaRef.current!.value}
                      </ReactMarkdown>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Writing Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Writing Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Use clear, descriptive titles</li>
                  <li>• Break up text with headings</li>
                  <li>• Add relevant tags for discoverability</li>
                  <li>• Include a compelling excerpt</li>
                  <li>• Use images to enhance your content</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
