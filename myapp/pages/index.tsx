import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";

const Home = (artists) => {
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title="Malik Moss"
      description="15 public playlists"
    >
      <div>Home page</div>
    </GradientLayout>
  );
};

export const getServerSideProps = async (req) => {
  const artists = await prisma.artist.findMany();

  return {
    props: { artists },
  };
};

export default Home;
