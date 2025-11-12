import { StyleSheet } from 'react-native';

const HEADER_COLOR = '#142c44';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  localHeader: {
    backgroundColor: HEADER_COLOR,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e5e4e4ff',
  },
  userEmail: {
    fontSize: 14,
    color: '#e5e4e4ff',
    marginTop: 5,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  menuButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuButtonIcon: {
    color: '#142c44',
    marginRight: 15,
  },
  menuButtonText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  menuButtonArrow: {
    color: '#aaa',
  },
});
