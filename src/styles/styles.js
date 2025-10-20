import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },

  header: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#34b1dbff',
    marginBottom: 15,
    borderRadius: 8,
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  section: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },

  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    paddingHorizontal: 6,
  },

  itemName: {
    fontSize: 15,
    color: '#333',
    flex: 2,
  },

  counter: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444',
    flex: 1,
    textAlign: 'center',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 5,
    fontSize: 14,
    backgroundColor: '#fff',
    width: '45%',
  },

  button: {
    backgroundColor: '#6eec6cff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginHorizontal: 4,
  },

  addZikrButton: {
    backgroundColor: '#2a2ae7ff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginVertical: 6,
    alignSelf: 'center',
    width: 90,
  },
});
