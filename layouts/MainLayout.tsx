import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function MainLayout(props) {
	return (
		<div className="full-height">
			<Header />
			<div className="main flex flex-direction_col flex-centering_justified">{props.children}</div>
			<Footer />
		</div>
	);
}
