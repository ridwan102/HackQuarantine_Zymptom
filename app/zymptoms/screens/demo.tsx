// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
// import buttonClickListener from '../App';

// export default function Demo (this: any) {

//     return (
//         <View style={styles.container}>
  
//           <TextInput
//             style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2}}
//             // Adding hint in TextInput using Placeholder option.
//             placeholder=" Enter Your User Name"
//             //set the value in state.
//             onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
//             // Making the Under line Transparent.
//             underlineColorAndroid="transparent"
//           />
  
  
//           { this.state.ErrorStatus == false ? (
//              <Text style={styles.errorMessage}>
//                * Please enter the text to proceed.
//              </Text>
//             ) : null  }
  
//           <View style={[{ width: "93%", margin: 15, backgroundColor: "red" }]}>
//             <Button
//             onPress={this.buttonClickListener}
//             title="Submit"
//             color="#00B0FF"
//             />
//           </View>
  
//         </View>
//       );
//     }
  
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#e5e5e5"
//     },
//     errorMessage: {
//       fontSize: 20,
//       color:"red",
//       marginLeft:-80,
//     }
//   });

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   TextInput,
//   View,
//   Alert,
//   Button,
// } from 'react-native';

// class Error extends React.Component <any,any> {
//     constructor(props: Readonly<{TextInputName: any, TextInputEmail: any}>) {
//       super(props);
//       this.state = {
//         TextInputName: '',
//         TextInputEmail: '',
//       };
//     }
//     CheckTextInput = () => {
//       //Handler for the Submit onPress
//       if (this.state.TextInputName != '') {
//         //Check for the Name TextInput
//         if (this.state.TextInputEmail != '') {
//           //Check for the Email TextInput
//           alert('Success')
//         } else {
//           alert('Please Enter Email');
//         }
//       } else {
//         alert('Please Enter Name');
//       }
//     };
//   }

// export default function Demo (this: any) {

//     return (
//       <View style={styles.MainContainer}>
//         <TextInput
//           placeholder="Enter Name"
//           onChangeText={TextInputName => this.setState({ TextInputName })}
//           underlineColorAndroid="transparent"
//           style={styles.TextInput}
//         />
//         <TextInput
//           placeholder="Enter Email"
//           onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
//           underlineColorAndroid="transparent"
//           style={styles.TextInput}
//         />
//         <View style={{ marginTop: 15 }}>
//           <Button
//             title="Submit"
//             onPress={this.CheckTextInput}
//             color="#606070"
//           />
//         </View>
//       </View>
//     );
//   }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     margin: 35,
//   },
//   TextInput: {
//     width: '100%',
//     height: 40,
//     paddingLeft: 5,
//     borderWidth: 1,
//     marginTop: 15,
//     borderColor: '#606070',
//   },
// });

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Button,
} from 'react-native';

const CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.TextInputName != '') {
      //Check for the Name TextInput
      if (this.state.TextInputEmail != '') {
        //Check for the Email TextInput
        alert('Success')
      } else {
        alert('Please Enter Email');
      }
    } else {
      alert('Please Enter Name');
    }
  };

export default function Demo (){


      
    return (
        <View style={styles.MainContainer}>
          <TextInput
            placeholder="Enter Name"
            onChangeText={TextInputName => this.setState({ TextInputName })}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <TextInput
            placeholder="Enter Email"
            onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
            underlineColorAndroid="transparent"
            style={styles.TextInput}
          />
          <View style={{ marginTop: 15 }}>
            <Button
              title="Submit"
              onPress={this.CheckTextInput}
              color="#606070"
            />
          </View>
        </View>
      );
    }
  
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      margin: 35,
    },
    TextInput: {
      width: '100%',
      height: 40,
      paddingLeft: 5,
      borderWidth: 1,
      marginTop: 15,
      borderColor: '#606070',
    },
  });