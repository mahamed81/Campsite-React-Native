import { Text, View , ScrollView} from 'react-native';
import {useState} from 'react'
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';



export const HomeScreen = () => {

  const [campsites, setCampsites] = useState(CAMPSITES);
  const [promotions, setPromotions] = useState(PROMOTIONS);
  const [partners, setPartners] = useState(PARTNERS);  

  const featCampsite = campsites.find((item) => item.featured);
  const featPromotion = promotions.find((item) => item.featured);
  const featPartner = partners.find((item) => item.featured);



  const FeaturedItem = ({item}) => {
    if (item) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={item.image} >
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>{item.name}</Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        )
    }
  }


  return (
    <ScrollView>
    <FeaturedItem item={featCampsite} />
    <FeaturedItem item={featPromotion} />
    <FeaturedItem item={featPartner} />    
    </ScrollView>
  );
}
