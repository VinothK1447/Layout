import { StyleSheet, View } from 'react-native';
import Box from './components/Box/Box';

export default function App() {
	return (
		<View style={styles.container}>
			<Box style={{ backgroundColor: 'darkcyan' }}> Box 1</Box>
			<Box style={{ backgroundColor: 'cyan' }}> Box 2</Box>
			<Box style={{ backgroundColor: 'crimson' }}> Box 3</Box>
			<Box style={{ backgroundColor: 'teal' }}> Box 4</Box>
			<Box style={{ backgroundColor: 'midnightblue' }}> Box 5</Box>
			<Box style={{ backgroundColor: 'gray' }}> Box 6</Box>
			<Box style={{ backgroundColor: 'indigo' }}> Box 7</Box>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		borderColor: 'red',
		borderWidth: 6
	}
});
