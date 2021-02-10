import React from "react";
import { Dimensions, Image, StyleSheet, BackHandler, AppState, FlatList, TouchableOpacity, } from "react-native";
import { Container, Card, View, Input, ListItem, Text, Content, Left, Body, Right } from "native-base";
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class SearchScreen extends React.Component {
    static appIsActive = true;
    constructor(props) {
        super(props)
        this.state = {
            ProductList: [
                { name: 'Main' },
                { name: 'Shop' },
                { name: 'Product' },
                { name: 'Shoes' },
                { name: 'Hot Sale' },
                { name: 'Clothing' },
                { name: 'Outerwear & Jackets' },
                { name: 'Bottoms' }
            ]
        };
    }

    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    handleBackButton = () => {
        this.props.navigation.navigate("SellingScreen")
        return true;
    }

    render() {
        return (
            <Container>

                <Content style={styles.containerStyle}>
                    <AntDesignIcon name="closecircle" size={30} color="#958D8D" style={styles.closeIconStyle} />
                    <View style={styles.viewStyle}>
                        <Input placeholder='Search products…' placeholderTextColor='#CDCDCD' style={{ marginLeft: 10 }} />
                        <FontistoIcon name="search" size={20} color="#707070" style={{ paddingHorizontal: 10 }} />
                    </View>
                    <FlatList

                        style={{ marginLeft: 12 }}
                        data={this.state.ProductList}
                        renderItem={({ item }) =>
                            <View style={{ paddingVertical: 10, flexDirection: 'row' }}>
                                <Left>
                                    <Text style={styles.textStyle}>{item.name}</Text>
                                </Left>

                                <Right>
                                    <EntypoIcon name="chevron-right" size={30} color="#707070" />
                                </Right>
                            </View>
                        } />

                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
        backgroundColor: '#F9F9F9'
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 30
    },
    closeIconStyle: {
        marginLeft: 10,
        marginBottom: 30
    },
    textStyle: {
        color: '#717171',
        fontSize: width / 25,
    }
});