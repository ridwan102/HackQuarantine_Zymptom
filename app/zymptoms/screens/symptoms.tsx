import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface AppState {
    state: any;
    navigation: any;
}

// interface AppProps {
//     user_id: '';
//     email: '';
//     phone: '';
//     first_name: '';
//     last_name: '';
// }

export default class Symptoms extends React.Component <AppState>  {
    
    
    // constructor(props:any) {
    //     super(props);
    //     this.state = {
    //         current_user: {
    //             user_id: '',
    //             email: '',
    //             phone: '',
    //             first_name: '',
    //             last_name: ''
    //         },
    //         state_machine: [],
    //         current_state: 0,
    //         symptoms: {
    //             cough: { selected: false, severity: 0 },
    //             fever: { selected: false, severity: 0 },
    //             tiredness: { selected: false, severity: 0 },
    //             issues_breathing: { selected: false, severity: 0 },
    //         },
    //         latitude: null,
    //         longitude: null
    //     }

    //     this.getCoordinates = this.getCoordinates.bind(this);
    //     this.getLocation = this.getLocation.bind(this);
    //     this.handleLocationError = this.handleLocationError.bind(this);
    //     this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
    //     this.handleClickSeverity = this.handleClickSeverity.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.initStateMachine = this.initStateMachine.bind(this);
    //     this.nextState = this.nextState.bind(this);
    // }

    // componentDidMount() {
    //     this.getLocation();
    //     fetch('https://zymptoms.herokuapp.com/api/v1/get_current_user', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': 'http://localhost:8000',
    //             'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    //             'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //             'Authorization': 'Basic ' + Base64.encode(localStorage.getItem('token') + ":_" )
    //         }})
    //         .then((response) => {
    //             if (!response.ok) throw Error(response.statusText);
    //             return response.json();
    //         })
    //         .then((data) => {
    //             let current_user = Object.assign({}, data['user']);
    //             let updated_user = Object.assign({}, data['user']);
    //             this.setState({
    //                 current_user: current_user,
    //                 updated_user: updated_user
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             window.location.href = '/login';
    //         });
    // }

    // getCoordinates(position:any) {
    //     this.setState({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //     });
    // }

    // getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    //     }
    //     else {
    //         alert("Geolocation is not supported by this browser.")
    //     }
    // }

    // handleLocationError(error:any) {
    //     switch(error.code) {
    //         case error.PERMISSION_DENIED:
    //             alert("User denied the request for Geolocation.")
    //             break;
    //         case error.POSITION_UNAVAILABLE:
    //             alert("Location information is unavailable.")
    //             break;
    //         case error.TIMEOUT:
    //             alert("The request to get user location timed out.")
    //             break;
    //         case error.UNKNOWN_ERROR:
    //             alert("An unknown error occurred.")
    //             break;
    //         default:
    //             alert("An unknown error occured.")
    //     }
    // }

    // handleClickCheckbox(event:any) {
    //     event.preventDefault();
    //     let symptoms = this.state.symptoms;
    //     if (event.currentTarget.className.includes('check-cough')) {
    //         symptoms.cough.selected = !this.state.symptoms.cough.selected;
    //         this.setState({symptoms: symptoms});
    //     }
    //     else if (event.currentTarget.className.includes('check-fever')) {
    //         symptoms.fever.selected = !this.state.symptoms.fever.selected;
    //         this.setState({symptoms: symptoms});
    //     }
    //     else if (event.currentTarget.className.includes('check-tiredness')) {
    //         symptoms.tiredness.selected = !this.state.symptoms.tiredness.selected;
    //         this.setState({symptoms: symptoms});
    //     }
    //     else if (event.currentTarget.className.includes('check-issues-breathing')) {
    //         symptoms.issues_breathing.selected = !this.state.symptoms.issues_breathing.selected;
    //         this.setState({symptoms: symptoms});
    //     }
    // }

    // handleClickSeverity(level:any) {
    //     let current_symptom = this.state.state_machine[this.state.current_state];
    //     let symptoms= this.state.symptoms;
    //     symptoms[current_symptom].severity = level;
    //     this.setState({symptoms: symptoms});
    // }

    // handleSubmit(event:any) {
    //     event.preventDefault();

    //     let symptoms = ['cough', 'fever', 'tiredness', 'issues_breathing'];

    //     symptoms.map((symptom) => {
    //         if (this.state.symptoms[symptom].selected) {
    //             fetch('https://zymptoms.herokuapp.com/api/v1/create_symptom', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Access-Control-Allow-Origin': 'http://localhost:8000',
    //                     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    //                     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //                     'Authorization': 'Basic ' + Base64.encode(localStorage.getItem('token') + ":_" )},
    //                 body: JSON.stringify({
    //                     latitude: this.state.latitude,
    //                     longitude: this.state.longitude,
    //                     name: symptom,
    //                     severity: this.state.symptoms[symptom].severity
    //                 })})
    //                 .then((response) => {
    //                     if (!response.ok) throw Error(response.statusText);
    //                     return response.json();
    //                 })
    //                 .then((data2) => {
    //                     window.location.href = '/dashboard'
    //                 })
    //                 .catch((error) => console.log(error));
    //         }
    //     })
    // }

    // initStateMachine() {
    //     let symptoms = ['cough', 'fever', 'tiredness', 'issues_breathing'];

    //     let state_machine = ['symptoms'];
    //     symptoms.map((symptom) => {
    //         if (this.state.symptoms[symptom].selected) {
    //             console.log(this.state.symptoms[symptom]);
    //             state_machine.push(symptom);
    //         }
    //     });
    //     state_machine.push('finish');

    //     this.setState({current_state: 1});
    //     this.setState({state_machine: state_machine});

    //     document.getElementById('symptoms-checkboxes').style.display = 'none';
    //     if (state_machine.length == 2) {
    //         document.getElementById('finish-symptoms').style.display = 'flex';
    //     }
    //     else {
    //         document.getElementById('describe-symptom').style.display = 'flex';
    //     }   
    // }

    // nextState() {
    //     this.setState({current_state: this.state.current_state+1});
    //     if (this.state.state_machine.length-1 == this.state.current_state+1) {
    //         document.getElementById('describe-symptom').style.display = 'none';
    //         document.getElementById('finish-symptoms').style.display = 'flex';
    //     }
    // }

    state={
        pressed: true,
      };
    
      changeColor(){
        if(!this.state.pressed){
           this.setState({ pressed: true});
        } else {
          this.setState({ pressed: false});
        }
      }

      yourFunction(){
        this.props.navigation.push('Severity');
        this.changeColor;
       }

    render () {
        return (
            <View style= { styles.container }>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Click the ones that apply to you</Text>
                </View>
                <View style={styles.symptomContainer}>

                {/* <TouchableOpacity activeOpacity={0.5}
                        style={styles.symptomButton}
                        onPress={()=> {this.props.navigation.push('Severity')}}>
                        <Text style={styles.symptomText}>Cough</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                        style={styles.symptomButton}
                        onPress={()=> {this.props.navigation.push('Severity')}}>
                        <Text style={styles.symptomText}>Fever</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                        style={styles.symptomButton}
                        onPress={()=> {this.props.navigation.push('Severity')}}>
                        <Text style={styles.symptomText}>Tiredness</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                        style={styles.symptomButton}
                        onPress={()=> {this.props.navigation.push('Severity')}}>
                        <Text style={styles.symptomText}>Difficulty Breathing</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity activeOpacity={0.5}
                        style={this.state.pressed ? styles.symptomButton : styles.symptomButtonselect}
                        onPress={()=> {
                            this.changeColor(),
                            this.props.navigation.push('Severity')}}>
                        <Text style={this.state.pressed ? styles.symptomText : styles.symptomTextselect}>Cough</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                        style={this.state.pressed ? styles.symptomButton : styles.symptomButtonselect}
                        onPress={()=> {
                            this.changeColor(),
                            this.props.navigation.push('Severity')}}>
                        <Text style={this.state.pressed ? styles.symptomText : styles.symptomTextselect}>Fever</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                        style={this.state.pressed ? styles.symptomButton : styles.symptomButtonselect}
                        onPress={()=> {
                            this.changeColor(),
                            this.props.navigation.push('Severity')}}>
                        <Text style={this.state.pressed ? styles.symptomText : styles.symptomTextselect}>Tiredness</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}
                        style={this.state.pressed ? styles.symptomButton : styles.symptomButtonselect}
                        onPress={()=> {
                            this.changeColor(),
                            this.props.navigation.push('Severity')}}>
                        <Text style={this.state.pressed ? styles.symptomText : styles.symptomTextselect}>Difficulty</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} activeOpacity={0.5}
                    onPress={() => this.props.navigation.push('OtherSym')}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container : {
        flex: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F67183'
    },
    textContainer: {
        flex: height/900,
        marginTop: height/14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
        fontSize: height/44,
      },
    symptomContainer: {
        flex: height/300,
        marginTop: -height/12,
        justifyContent: 'center',
    },
    symptomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
    },
    symptomButtonselect: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: height/9,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
    },
    symptomText: {
        color: '#019CDD',
        fontSize: height/45,
        fontFamily: 'poppins-regular',
    },
    symptomTextselect: {
        color: '#FFFFFF',
        fontSize: height/45,
        fontFamily: 'poppins-regular',
    },
    buttonsContainer: {
        flex: height/900,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#019CDD',
        height: height/17.5,
        width: width/1.4,
        borderRadius: height/15,
        margin: height/90,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: height/55,
        fontFamily: 'poppins-medium',
    },
});
