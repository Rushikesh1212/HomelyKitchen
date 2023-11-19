import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {Icon} from 'react-native-elements';
// import {Dialog} from 'react-native-paper';
// import {SafeAreaView} from 'react-navigation';
// import {useDispatch, useSelector} from 'react-redux';
// import {colors} from '../../config/styles.js';
import {small} from '../../constants/Theme/index.js';
// import {GeneralModal} from '../../HOC/GeneralModal.js';
// import {useNavigation} from '../../hooks/useNavigation.js';
// import {getLanguage} from '../../redux/language/actions.js';
// import {AppText} from '../AppText.js';

const window = Dimensions.get('window');

export const SideMenu = (props) => {
//   const navigation = useNavigation();
//   const [languageModal, toggleLanguageModal] = useState(false);
//   const [modal, toggleModal] = useState(false);
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.userDetails.token);
//   const isLoggedIn = !!token;
//   const store = useSelector((store) => ({
//     userDetails: store.userDetails,
//     labels: store.labels,
//   }));
//   const {labels, languages} = store.labels;
//   return (
//     <React.Fragment>
//       <View style={{backgroundColor: '#fff', flex: 1}}>
//         <TouchableOpacity
//           onPress={() => {
//             isLoggedIn ? navigation.navigate('Profile') : toggleModal(true);
//           }}
//           style={{
//             flexDirection: 'row',
//             height: 100,
//             margin: 20,
//             borderBottomWidth: 1,
//             alignItems: 'center',
//           }}>
//           <ImageBackground
//             style={{height: 60, width: 60, borderRadius: 100}}
//             source={
//               store.userDetails.profile_photo !== '' &&
//               store.userDetails.image_path
//                 ? {
//                     uri: store.userDetails.image_path.concat(
//                       store.userDetails.profile_photo,
//                     ),
//                   }
//                 : require('../../images/user.jpg')
//             }
//             imageStyle={{borderRadius: 100}}
//           />
//           <View style={{marginLeft: 20}}>
//             <Text style={{fontWeight: 'bold'}}>
//               {store.userDetails.name !== ''
//                 ? store.userDetails.name
//                 : 'Welcome User'}
//             </Text>
//           </View>
//         </TouchableOpacity>
//         <View style={{marginLeft: 5}}>
//           <TouchableOpacity
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               paddingTop: 15,
//             }}
//             onPress={() => {
//               toggleLanguageModal(true);
//             }}>
//             <View style={styles.iconContainer}>
//               <Icon
//                 size={18}
//                 name="user"
//                 type="font-awesome"
//                 color={colors.theme}
//               />
//             </View>
//           <Text style={{}}>{labels.app_change_language}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Dashboard')}
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               paddingTop: 15,
//             }}>
//             <View style={styles.iconContainer}>
//               <Icon
//                 size={18}
//                 name="home"
//                 type="font-awesome"
//                 color={colors.theme}
//               />
//             </View>
//             <Text>{labels.menu_dashboard}</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Search')}
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               paddingTop: 15,
//             }}>
//             <View style={styles.iconContainer}>
//               <Icon
//                 size={18}
//                 name="search"
//                 type="font-awesome"
//                 color={colors.theme}
//               />
//             </View>
//             <Text>{labels.user_service_center_search}</Text>
//           </TouchableOpacity>
//           {store.userDetails.user_id !== '' ? (
//             <React.Fragment>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('BookingList')}
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   paddingTop: 15,
//                 }}>
//                 <View style={styles.iconContainer}>
//                   <Icon
//                     size={18}
//                     name="calendar"
//                     type="font-awesome"
//                     color={colors.theme}
//                   />
//                 </View>
//                 <Text>{labels.site_account_appointment}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('WishList')}
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   paddingTop: 15,
//                 }}>
//                 <View style={styles.iconContainer}>
//                   <Icon
//                     size={18}
//                     name="heart"
//                     type="font-awesome"
//                     color={colors.theme}
//                   />
//                 </View>
//                 <Text>{labels.site_account_wishlist}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('RatingList')}
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   paddingTop: 15,
//                 }}>
//                 <View style={styles.iconContainer}>
//                   <Icon
//                     size={18}
//                     name="star"
//                     type="font-awesome"
//                     color={colors.theme}
//                   />
//                 </View>
//                 <Text>{labels.menu_reviews_rating_list}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('ChatHistory')}
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   paddingTop: 15,
//                 }}>
//                 <View style={styles.iconContainer}>
//                   <Icon
//                     size={18}
//                     name="comments"
//                     type="font-awesome"
//                     color={colors.theme}
//                   />
//                 </View>
//                 <Text>{labels.menu_chat_history}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('Profile')}
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   paddingTop: 15,
//                 }}>
//                 <View style={styles.iconContainer}>
//                   <Icon
//                     size={18}
//                     name="cog"
//                     type="font-awesome"
//                     color={colors.theme}
//                   />
//                 </View>
//                 <Text>{labels.app_account_settings? labels.app_account_settings: "Account Settings"}</Text>
//               </TouchableOpacity>
//             </React.Fragment>
//           ) : (
//             <TouchableOpacity
//               onPress={() => navigation.navigate('Login')}
//               style={{
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingTop: 15,
//               }}>
//               <View style={styles.iconContainer}>
//                 <Icon
//                   size={18}
//                   name="sign-in"
//                   type="font-awesome"
//                   color={colors.theme}
//                 />
//               </View>
//             <Text>{labels.site_login ? labels.site_login : "Log In"}</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={{paddingTop: 15, marginLeft: 25}}>
//             <Text>{labels.app_version ? labels.app_version : "Version"} 0.1</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <NotLoggedInModal
//         closeModal={() => toggleModal(false)}
//         showLogIn={modal}
//         labels={labels}
//         goToSignUp={() => {
//           toggleModal(false);
//           navigation.navigate('RegisterStack');
//         }}
//       />
//       <Dialog
//         dismissable={true}
//         visible={languageModal}
//         onDismiss={() => toggleLanguageModal(false)}>
//         <Dialog.Title>Select Language</Dialog.Title>

//         <Dialog.Content>
//           {languages.map((lang, i) => {
//             return (
//               <AppText
//                 onPress={() => {
//                   dispatch(getLanguage(lang.id));
//                   toggleLanguageModal(false);
//                 }}
//                 key={i}
//                 style={{marginVertical: 5}}>
//                 {lang.language_name}
//               </AppText>
//             );
//           })}
//         </Dialog.Content>
//       </Dialog>
//     </React.Fragment>
//   );
// };
// const NotLoggedInModal = (props) => {
//   const {showLogIn, closeModal, goToSignUp,labels} = props;
//   return (
//     <GeneralModal
//       containerStyle={{
//         justifyContent: 'flex-end',
//         padding: 0,
//         backgroundColor: 'rgba(0,0,0,0.8)',
//       }}
//       showModal={showLogIn}
//       toggleModal={() => {
//         closeModal();
//       }}>
//       <View style={styles.topContainer}>
//         <SafeAreaView forceInset={{top: 'never'}}>
//           <View>
//             <AppText type={['header', 'theme']}>
//               {labels.app_welcome_autoservices ? labels.app_welcome_autoservices : "Welcome to Autoservices"}
//             </AppText>

//             <View
//               style={{
//                 marginVertical: `${small}%`,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 flexDirection: 'row',
//               }}>
//               <AppText type={['center', 'small']}>
//               {labels.app_new_to_autoservices ? labels.app_new_to_autoservices : "New to Autoservices?"}{' '}
//               </AppText>
//               <TouchableOpacity
//                 onPress={() => {
//                   goToSignUp();
//                 }}>
//                 <AppText type={['primary', 'bold']}>{labels.app_sign_up ? labels.app_sign_up : "Sign Up"}</AppText>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </SafeAreaView>
//       </View>
//     </GeneralModal>
//   );
};
const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#fff',
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 25,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  topContainer: {
    backgroundColor: '#fff',
    width: '100%',
    // height: '30%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 0.8,
    borderLeftWidth: 0.8,
    borderRightWidth: 0.8,
    paddingVertical: `${small}%`,
  },
});