// import { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
// import Google from "next-auth/providers/google";
// import async from "../../../../../../h-com/src/app/(afterLogin)/home/layout";

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     Google({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile }) {
//       if (!profile?.email) {
//         throw new Error("프로필을 찾을 수 없습니다");
//       }
//     },
//   },
// };
