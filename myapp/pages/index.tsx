import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useMe } from "../lib/hooks";

const Home = ({ artists }) => {
  const { user } = useMe();
  return (
    <GradientLayout
      roundImage
      color="green"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
    >
      <Box color="white" padding="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="m">only visible to you</Text>
        </Box>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <Box padding="10px" width="20%">
            <Box bg="gray.900" borderRadius="4px" padding="15px">
              <Image
                src="https://placekitten.com/300/300"
                borderRadius="100%"
              />
              <Box marginTop="20px">
                <Text fontSize="large">{artist.name}</Text>
                <Text fontSize="x-small">Artist</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany();

  return {
    props: { artists },
  };
};

export default Home;
