import { createCredentialsVerifier } from "@foundation/auth/credentials";
import {
  getPasswordForSlug,
  resolveClientSlug,
} from "@/lib/proposals/registry";

export const verifyCredentials = createCredentialsVerifier({
  resolveClientSlug,
  getPasswordForSlug,
});
