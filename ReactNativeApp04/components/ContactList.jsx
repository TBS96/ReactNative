import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts = [
        
        {
            uid: 1,
            name: 'Prantik Ghosh',
            username: 'tbs96',
            email: 'Sincere@april.biz',
            phone: '1-770-736-8031',
            imgUrl: 'https://avatars.githubusercontent.com/u/118633815?v=4'
        },
        {
            uid: 2,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'google@may.com',
            phone: '1-770-736-8031',
            imgUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4'
        },
        {
            uid: 3,
            name: 'Deepa Ghosh',
            username: 'deepa71',
            email: 'nov@dec.in',
            phone: '1-770-736-8031',
            imgUrl: 'https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/272832062_1590252491334912_1792116578692869553_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=COB2AccNr0EQ7kNvgHgemUu&_nc_ht=scontent.fccu18-1.fna&oh=00_AYCuq5QkU_VuwpemoZPvSnm2xq4ncFqPMAEiHX48AMS80Q&oe=66AB0EF9'
        },
        {
            uid: 4,
            name: 'Subhash Ghosh',
            username: 'subhash007',
            email: 'Sincere@april.biz',
            phone: '1-770-736-8031',
            imgUrl: 'https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/395389602_122093745818101692_1896209431914511472_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=4npD6y4aT1oQ7kNvgHFIxTE&_nc_ht=scontent.fccu18-1.fna&oh=00_AYAvvURVPdA-XqbbDneKdIMTcUXDA5Kap6hVmrf30plBdw&oe=66AAFD8F'
        },
         
    ];

  return (
    <View>

      <Text style={styles.headingText}>Contact List</Text>

      {/* <ScrollView style={styles.container} scrollEnabled={true} horizontal={true}> */}
      <ScrollView style={styles.container} scrollEnabled={false}>
        {
            // contacts.map(() => {return}) need to write return keyword if we use {}
            // contacts.map(() => ()) no need to write return keyword if we use ()

            contacts.map(({uid, name, username, email, imgUrl}) => (

                <View key={uid} style={styles.userCard}>

                    <Image 
                        source={{
                            uri: imgUrl
                        }}
                        style={styles.userImage}
                    />

                    <View>
                        <Text style={styles.uid}>ID: {uid}</Text>
                        <Text style={styles.name}>Name: {name}</Text>
                        <Text style={styles.username}>Username: {username}</Text>
                        <Text style={styles.email}>Email: {email}</Text>
                    </View>

                </View>

            ))
        }
      </ScrollView>

    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },

    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around'
        marginBottom: 8,
        backgroundColor: '#234065',
        padding: 10,
        borderRadius: 25
    },

    userImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 14
    },

    uid: {
        fontSize: 14,
        fontWeight: '500',
        color: '#EC811E'
    },

    name: {
        fontSize: 16,
        fontWeight: '900',
        color: 'wheat'
    },

    username: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1BA159'
    },

    email: {
        fontSize: 14,
        fontWeight: '700',
        color: '#729DDC'
    },

})