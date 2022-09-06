import { ScrollView } from "react-native";
import { Card, Text, Button } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Card.Image
          source={require("../assets/images/chrome-river.jpg")}
        ></Card.Image>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
        <Text>1 Nucamp Way</Text>
        <Text> Seattle, WA 98001</Text>
        <Text style={{ marginBottom: 10 }}> U.S.A.</Text>
        <Text>Phone: 1-206-555-1234</Text>
        <Text>Email: campsites@nucamp.co</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
