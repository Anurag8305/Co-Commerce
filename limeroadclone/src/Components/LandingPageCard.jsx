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

export default function LandingPageCard({
	designer,
	followers,
	id,
	image,
	likes,
}) {
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
						src={image}
					/>
				</Box>
				<Stack pt={10} className="textcontent">
					<Text fontSize={"m"} textTransform={"uppercase"}>
						By <b>{designer}</b>
					</Text>
					<Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
						Followers:{followers}
					</Text>
					<Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
						Likes:{likes}
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