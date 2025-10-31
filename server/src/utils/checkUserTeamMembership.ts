import prisma from "../db/client.js";

/**
 * Check if a user belongs to a team with the given subdomain
 * @param email - user's email
 * @param subdomain - team subdomain
 * @returns boolean - true if user is in team, else false
 */

export const checkUserTeamMembership = async (
  email: string,
  subdomain: string
): Promise<boolean> => {
  // Find the team with the given subdomain
  const team = await prisma.team.findUnique({
    where: { subdomain },
    select: { id: true },
  });

  if (!team) return false;

  // Check if a membership exists
  const membership = await prisma.teamMember.findFirst({
    where: {
      teamId: team.id,
      user: { email },
    },
  });

  return !!membership; // true if membership exists, false otherwise
};
