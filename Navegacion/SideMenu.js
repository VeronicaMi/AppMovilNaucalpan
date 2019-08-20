import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { NavigationActions, StackNavigator } from 'react-navigation';

export default class SideMenu extends React.Component{
    constructor() {
        super();
        
        this.options = [
            {
              subOptions: [
                { secondaryHeading: 'First Screen', navigationPath: 'First' },
              ],
            },
            {
              mainHeading: 'Main Heading 2',
              subOptions: [
                { secondaryHeading: 'Second Screen', navigationPath: 'Second' },
                { secondaryHeading: 'Third Screen', navigationPath: 'Third' },
              ],
            },
          ];
    }

    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route,
        });
        this.props.navigation.dispatch(navigateAction);
      };
   
    render(){
        return(
            <View style={styles.container}>
            <ScrollView>
              <View>
                {this.options.map((option, key) => (
                  <View>
                    <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                    {option.subOptions.map((item, key) => (
                      <View style={styles.secondaryHeading}>
                        <Text onPress={this.navigateToScreen(item.navigationPath)}>
                          {item.secondaryHeading}
                        </Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
            <View style={styles.footerContainer}>
              <Text>This is my fixed footer</Text>
            </View>
          </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
    },
    secondaryHeading: {
      padding: 10,
    },
    mainHeading: {
      paddingVertical: 10,
      paddingHorizontal: 5,
      backgroundColor: 'lightgrey',
    },
    footerContainer: {
      padding: 20,
      backgroundColor: 'lightgrey',
    },
  });