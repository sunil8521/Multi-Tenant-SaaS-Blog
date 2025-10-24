import { useState, useRef } from "react";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Textarea } from "@repo/ui/components/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/components/alert-dialog";
import {
  UserPlus,
  MoreHorizontal,
  Mail,
  Edit,
  Trash2,
  Crown,
  Users,
  Search,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { useSendInviteMutation } from "../../state/api/userApi";
// Mock data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@acmecorp.com",
    avatar: "/sarah-chen-avatar.jpg",
    role: "admin" as const,
    joinedAt: "2023-12-01T00:00:00Z",
    lastActive: "2024-01-15T10:30:00Z",
    postsCount: 12,
    status: "active" as const,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "marcus@acmecorp.com",
    avatar: "/marcus-johnson-avatar.jpg",
    role: "author" as const,
    joinedAt: "2023-12-15T00:00:00Z",
    lastActive: "2024-01-14T16:45:00Z",
    postsCount: 8,
    status: "active" as const,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily@acmecorp.com",
    avatar: "/emily-rodriguez-avatar.jpg",
    role: "editor" as const,
    joinedAt: "2024-01-05T00:00:00Z",
    lastActive: "2024-01-13T09:15:00Z",
    postsCount: 5,
    status: "active" as const,
  },
  {
    id: 4,
    name: "John Doe",
    email: "john@acmecorp.com",
    avatar: "/diverse-user-avatars.png",
    role: "reader" as const,
    joinedAt: "2024-01-10T00:00:00Z",
    lastActive: "2024-01-12T14:20:00Z",
    postsCount: 0,
    status: "active" as const,
  },
  {
    id: 5,
    name: "Alex Smith",
    email: "alex@acmecorp.com",
    avatar: null,
    role: "author" as const,
    joinedAt: "2024-01-08T00:00:00Z",
    lastActive: "2024-01-10T11:30:00Z",
    postsCount: 3,
    status: "invited" as const,
  },
];

const pendingInvitations = [
  {
    id: 1,
    email: "newuser@acmecorp.com",
    role: "author" as const,
    invitedBy: "Sarah Chen",
    invitedAt: "2024-01-14T10:00:00Z",
    status: "pending" as const,
  },
  {
    id: 2,
    email: "designer@acmecorp.com",
    role: "editor" as const,
    invitedBy: "Sarah Chen",
    invitedAt: "2024-01-13T15:30:00Z",
    status: "pending" as const,
  },
];

export default function TeamPage() {
  const [members, setMembers] = useState(teamMembers);
  const [invitations, setInvitations] = useState(pendingInvitations);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [isInviteDialogOpen, setIsInviteDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendInvite, { isLoading: isSending, isError }] =
    useSendInviteMutation();
  const emailsRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<string>("MEMBER"); // for select
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  const getRoleBadge = (role: string) => {
    const variants = {
      admin: { variant: "default" as const, icon: Crown },
      editor: { variant: "secondary" as const, icon: Edit },
      author: { variant: "outline" as const, icon: Edit },
      reader: { variant: "secondary" as const, icon: Users },
    };

    const config = variants[role as keyof typeof variants] || variants.reader;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      invited: "secondary",
      pending: "outline",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const handleRoleChange = (memberId: number, newRole: string) => {
    setMembers((prev) =>
      prev.map((member) =>
        member.id === memberId ? { ...member, role: newRole as any } : member
      )
    );
    toast.success("Role updated successfully");
  };

  const handleRemoveMember = (memberId: number) => {
    setMembers((prev) => prev.filter((member) => member.id !== memberId));
    toast.success("Member removed from team");
  };

  const handleSendInvites = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailsRef.current?.value.trim() || "";
    const message = messageRef.current?.value.trim() || "";
    const role = roleRef.current;




    // 🔹 Example: Send to backend
    try {
      const res=await sendInvite({email,role,message}).unwrap()
      


     toast.success(res.message); 
      setIsInviteDialogOpen(false);
    } catch (err) {
      console.error(err);
      toast.error(err.data.message);
    }
  };

  const handleResendInvite = async (invitationId: number) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Invitation resent successfully");
    } catch (error) {
      toast.error("Failed to resend invitation");
    }
  };

  const handleCancelInvite = (invitationId: number) => {
    setInvitations((prev) =>
      prev.filter((invite) => invite.id !== invitationId)
    );
    toast.success("Invitation cancelled");
  };

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Team Members</h1>
          <p className="text-muted-foreground">
            Manage your team and control access to your blog
          </p>
        </div>
        <Dialog open={isInviteDialogOpen} onOpenChange={setIsInviteDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Members
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Invite Team Members</DialogTitle>
              <DialogDescription>
                Send invitations to new team members. They'll receive an email
                with instructions to join.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSendInvites}>
              <div className="space-y-4">
                {/* Emails */}
                <div>
                  <Label className="mb-1" htmlFor="emails">
                    Email Addresses
                  </Label>
                  <Input
                    required
                    type="email"
                    placeholder="Enter email address"
                    ref={emailsRef}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Separate multiple email addresses with commas
                  </p>
                </div>

                {/* Role */}
                <div>
                  <Label className="mb-1" htmlFor="role">
                    Role
                  </Label>
                  <Select
                    defaultValue="MEMBER"
                    onValueChange={(value: string) => (roleRef.current = value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MEMBER">
                        Member - Can view posts and write posts
                      </SelectItem>
                      {/* <SelectItem value="WRITER">
                        Writer - Can create and edit own posts
                      </SelectItem> */}

                      <SelectItem value="ADMIN">Admin - Full access</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Label className="mb-1" htmlFor="message">
                    Personal Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Add a personal message to the invitation..."
                    ref={messageRef}
                    rows={2}
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setIsInviteDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Invites
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {members.filter((m) => m.status === "active").length}
            </div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admins</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {members.filter((m) => m.role === "admin").length}
            </div>
            <p className="text-xs text-muted-foreground">Team administrators</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Authors</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {members.filter((m) => m.role === "author").length}
            </div>
            <p className="text-xs text-muted-foreground">Content creators</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Invites
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{invitations.length}</div>
            <p className="text-xs text-muted-foreground">Awaiting response</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="author">Author</SelectItem>
                <SelectItem value="reader">Reader</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Members Table */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Manage roles and permissions for your team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Posts</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMembers.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={member.avatar || "/placeholder.svg"}
                            alt={member.name}
                          />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {member.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={member.role}
                        onValueChange={(value) =>
                          handleRoleChange(member.id, value)
                        }
                        disabled={member.role === "admin" && member.id === 1} // Prevent changing own admin role
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reader">Reader</SelectItem>
                          <SelectItem value="author">Author</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>{member.postsCount}</TableCell>
                    <TableCell>{formatDate(member.joinedAt)}</TableCell>
                    <TableCell>{formatTimeAgo(member.lastActive)}</TableCell>
                    <TableCell>{getStatusBadge(member.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          {member.id !== 1 && ( // Don't allow removing the main admin
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <DropdownMenuItem
                                  onSelect={(e) => e.preventDefault()}
                                  className="text-destructive"
                                >
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Remove Member
                                </DropdownMenuItem>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Remove Team Member
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to remove{" "}
                                    {member.name} from the team? This action
                                    cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() =>
                                      handleRemoveMember(member.id)
                                    }
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Remove Member
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filteredMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={member.avatar || "/placeholder.svg"}
                            alt={member.name}
                          />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {member.email}
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </DropdownMenuItem>
                          {member.id !== 1 && (
                            <DropdownMenuItem
                              onClick={() => handleRemoveMember(member.id)}
                              className="text-destructive"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Remove Member
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between">
                      {getRoleBadge(member.role)}
                      {getStatusBadge(member.status)}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Posts:</span>{" "}
                        {member.postsCount}
                      </div>
                      <div>
                        <span className="font-medium">Joined:</span>{" "}
                        {formatDate(member.joinedAt)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Invitations */}
      {invitations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Pending Invitations</CardTitle>
            <CardDescription>
              Invitations that haven't been accepted yet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invitations.map((invitation) => (
                <div
                  key={invitation.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="font-medium">{invitation.email}</div>
                    <div className="text-sm text-muted-foreground">
                      Invited as {invitation.role} by {invitation.invitedBy} •{" "}
                      {formatTimeAgo(invitation.invitedAt)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleResendInvite(invitation.id)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Resend
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCancelInvite(invitation.id)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
