import { View } from 'react-native'
import React from 'react'
import Text from '@kaloraat/react-native-text';
import { Avatar, Card, Title, Paragraph, DataTable } from 'react-native-paper'
import { useRoute } from '@react-navigation/native';

const SoftwareViewer = () => {

  const LeftContent = props => <Avatar.Icon {...props} icon="microsoft" />
  const route = useRoute();

  return (
    <View style={{flex:1, marginHorizontal:20, marginVertical:50,justifyContent: "center"}}>
      <Card style={{marginBottom:20}}>
        <Card.Title title={route.params.item.categorie} subtitle={new Date(route.params.item.createdAt).toDateString()+' || '+new Date(route.params.item.createdAt).toLocaleTimeString()} titleNumberOfLines={2} subtitleNumberOfLines={2} left={LeftContent} />
        <Card.Content>
          <Title>Details </Title>
          <Paragraph>{route.params.item.softwareName}</Paragraph>
        </Card.Content>
      </Card>
      <Text large light style={{marginTop:10, marginBottom:10}}>REQUEST DETAILS</Text>
      <DataTable>

        <DataTable.Row>
          <DataTable.Cell>Région :</DataTable.Cell>
          <DataTable.Cell>{route.params.item.region}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Requested For :</DataTable.Cell>
          <DataTable.Cell>{route.params.item.requestedFor}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Machine :</DataTable.Cell>
          <DataTable.Cell>{route.params.item.machineName}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Urgency :</DataTable.Cell>
          <DataTable.Cell>{route.params.item.urgency}</DataTable.Cell>
        </DataTable.Row>


        <DataTable.Row>
          <DataTable.Cell>Statut :</DataTable.Cell>
          <DataTable.Cell>{route.params.item.requestStatus}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Apprové :</DataTable.Cell>
          <DataTable.Cell>{route.params.item.approved.toString()}</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  )
}

export default SoftwareViewer