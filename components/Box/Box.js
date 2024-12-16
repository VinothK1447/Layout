import { StyleSheet, Text, View } from 'react-native';
const Box = ({ children, style }) => {
	return (
		<View style={[styles.box, style]}>
			<Text style={styles.text}>Box</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		backgroundColor: '#fff',
		padding: 10
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white'
	}
});

export default Box;
