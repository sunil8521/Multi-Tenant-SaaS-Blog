import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import {useBookmarkPostMutation} from "@/state/api/postApi";
const BookmarkButton = ({ postId ,isMarked}: { postId: string|undefined , isMarked: boolean }) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [bookmarkPost] = useBookmarkPostMutation();

 

  return (
    <div>
       <Button
                  variant={isBookmarked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Bookmark
                    className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
                  />
                </Button>

    </div>
  )
}

export default BookmarkButton
