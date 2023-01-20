import {
	Box,
	Center,
	useColorModeValue,
	Text,
	Stack,
	Image,
} from "@chakra-ui/react";
import { BsWhatsapp, BsHeart } from "react-icons/bs";
import "./LandingPageCard.css";

export default function LandingPageCard() {
	return (
		<Center py={12}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}
				zIndex={1}
			>
				<Box
					rounded={"lg"}
					mt={-12}
					pos={"relative"}
					height={"330px"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						filter: "blur(15px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(20px)",
						},
					}}
				>
					<Text fontWeight={800} fontSize={"xl"}>
						TRENDING THIS YEAR
					</Text>
					<Image
						rounded={"lg"}
						height={330}
						width={282}
						objectFit={"cover"}
						src="https://img0.junaroad.com/stories/story_p_63b7f02113cb38082a015356-1673860390.jpeg"
					/>
				</Box>
				<Stack pt={10} className="textcontent">
					<Text fontSize={"m"} textTransform={"uppercase"}>
						By <b>Anujabofficial</b>
					</Text>
					<Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
						404 Followers
					</Text>
					<div className="homologos">
						<Text fontSize={"xl"}>
							<BsHeart color={"red"} />
							<p>Like</p>
						</Text>
						<Text fontSize={"xl"}>
							<BsWhatsapp color={"green"} />
							<p>Share</p>
						</Text>
					</div>
				</Stack>
			</Box>
		</Center>
	);
}
