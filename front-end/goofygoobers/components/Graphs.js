import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import {Calendar} from 'react-native-calendars';

const linedata = {
    labels: ['2019-10-23', '2019-10-26', '2019-10-28', '2019-10-29', '2010-11-31'],                                                                '2019-11-9': {marked: true, dotColor: 'yellow', activeOpacity: 0},
    datasets: [
        {
            data: [6, 3, 3, 9, 8],
            strokeWidth: 3, // optional
            color: (opacity = 1) => `rgba(0, 132, 255, ${opacity})`,
        },
    ],
};
export default function Graph() {
    return (
        <View>
            <LineChart 
                data={linedata}
                width={Dimensions.get('window').width} // from react-native
                height={250}
                withInnerLines={false}
                withOuterLines={false}
                yAxisSuffix={" Drinks"}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: "#ffffff",
                    backgroundGradientTo: "#ffffff",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 132, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                      }
                }}
                bezier
                style={{
                    marginVertical: 31,
                    padding: 8,
                    borderRadius: 16
                }}
            />
            <Calendar
                markedDates={{
                    '2019-10-9': {marked: true, dotColor: 'yellow', activeOpacity: 0},
                    '2019-10-10': {marked: true, dotColor: 'yellow', activeOpacity: 0},
                    '2019-10-16': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2019-10-20': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2019-10-22': {marked: true, dotColor: 'yellow', activeOpacity: 0},
                    '2019-10-23': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2019-10-26': {marked: true, dotColor: 'yellow', activeOpacity: 0},
                    '2019-10-28': {marked: true, dotColor: 'yellow', activeOpacity: 0},
                    '2019-10-29': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2019-10-31': {marked: true, dotColor: 'red', activeOpacity: 0},
                }}
            />
        </View>
        
    );
}