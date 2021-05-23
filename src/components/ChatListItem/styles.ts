import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 88,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  firstCol: {
    marginRight: 16,
  },
  secondCol: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.25)',
  },
  senderName: {
    fontWeight: '900',
    marginBottom: 8,
    fontSize: 16,
  },
  message: {
    flex: 1,
    height: '100%',
    paddingTop: 8,
  },
  date: {
    height: '100%',
    paddingTop: 8,
  },
})
