// import { Box } from "@mui/system";

function Specials(props) {
	const isHavePromo = props.code;

	return (
		<div>
			<div>
				{/* <Box className={classes.image}>
					<img src={props.images.medium} alt={props.title} />
				</Box> */}
				<div>
					<div variant="h4">{props.type}</div>
					<div>{props.title}</div>
					<div>{props.text}</div>
					{isHavePromo ? `PROMO CODE ${props.code}` : ""}
					<button
						target="_blank"
						href={`https://www.google.com/maps/search/${props.geo}`}
						size="small"
					>
						Check Available Location
					</button>
				</div>
			</div>
		</div>
	);
}

export default Specials;
