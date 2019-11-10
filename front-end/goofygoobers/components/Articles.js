import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Dialog } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';

export default function Articles(props) {
    const background = props.darkMode ? styles.light : styles.dark;
    const theme = props.darkMode ? themes.dark : themes.light;
    return (
        <ScrollView>
            <Card style={{ ...background }}>
                <Card.Cover style={{marginTop: 5}} source={{ uri: 'https://www2.safetyserve.com/wp-content/uploads/2018/02/safety-serve-article-summer-alcohol-safety.jpg' }} />
                <Card.Content>
                <Title  theme={theme}>Summer & Alcohol Safety</Title>
                <Paragraph theme={theme}>Instead of consuming alcoholic beverages, keep hydrated with adequate amounts of water or sports drinks.</Paragraph>
                </Card.Content>      

                <Card.Cover style={{marginTop: 8}} source={{ uri: 'https://static01.nyt.com/images/2019/05/19/magazine/19Studies_01/42ae82a8ab644d10a60cc719da368d7c-jumbo.jpg?quality=90&auto=webp' }} />
                <Card.Content>
                <Title  theme={theme}>How Much Alcohol Can You Drink Safely?</Title>
                <Paragraph theme={theme}>Humans have been drinking fermented concoctions since the beginning of recorded time. But despite that long relationship with alcohol, we still don’t know what exactly the molecule does to our brains to create a feeling of intoxication. </Paragraph>
                </Card.Content>

                <Card.Cover style={{marginTop: 8}} source={{ uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323252/glass-of-wine.jpg' }} />
                <Card.Content>
                <Title  theme={theme}>Just how harmful is it to have 1 drink per day?</Title>
                <Paragraph theme={theme}>Many enjoy a glass of wine or beer during dinner, believing that this little alcohol couldn't possibly affect them. A new study is, however, warning that even one small drink per day can influence our health.</Paragraph>
                </Card.Content>

                <Card.Cover style={{marginTop: 8}} source={{ uri: 'https://share-cdn-prod.azureedge.net/wp-content/uploads/2015/07/drinking-red-wine-740x493.jpg' }} />
                <Card.Content>
                <Title  theme={theme}>How Alcohol Affects Heart Health</Title>
                <Paragraph theme={theme}>Do you usually have a glass of wine with dinner, or a beer at the game? You may have heard about a link between alcohol and heart health and might wonder if that drink is good for you.</Paragraph>
                </Card.Content>

                <Card.Cover style={{marginTop: 8}} source={{ uri: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/wine.jpg' }} />
                <Card.Content>
                <Title  theme={theme}>Alcohol: Balancing Risks and Benefits</Title>
                <Paragraph theme={theme}>Throughout the 10,000 or so years that humans have been drinking fermented beverages, they’ve also been arguing about their merits and demerits. The debate still simmers today, with a lively back-and-forth over whether alcohol is good for you or bad for you.</Paragraph>
                </Card.Content>
            </Card>
        </ScrollView>
    );
}
const themes = {
    dark: {
        colors: {
            text: "white",
        }
    },
    light: {
        colors: {
            text: "black",
        }
    }
};
const styles = StyleSheet.create({
    dark: {
        backgroundColor: '#fff'
    },
    light: {
        backgroundColor: '#333'
    }
});