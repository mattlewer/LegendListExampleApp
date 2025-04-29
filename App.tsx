import {LegendList} from '@legendapp/list';
import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

interface RowItem {
  name: string;
  desc: string;
}

const rowItems: RowItem[] = [
  {name: 'Item 1', desc: 'Description for item 1'},
  {name: 'Item 2', desc: 'Description for item 2'},
  {name: 'Item 3', desc: 'Description for item 3'},
  {name: 'Item 4', desc: 'Description for item 4'},
  {name: 'Item 5', desc: 'Description for item 5'},
  {name: 'Item 6', desc: 'Description for item 6'},
  {name: 'Item 7', desc: 'Description for item 7'},
  {name: 'Item 8', desc: 'Description for item 8'},
  {name: 'Item 9', desc: 'Description for item 9'},
  {name: 'Item 10', desc: 'Description for item 10'},
  {name: 'Item 11', desc: 'Description for item 11'},
  {name: 'Item 12', desc: 'Description for item 12'},
  {name: 'Item 13', desc: 'Description for item 13'},
  {name: 'Item 14', desc: 'Description for item 14'},
  {name: 'Item 15', desc: 'Description for item 15'},
  {name: 'Item 16', desc: 'Description for item 16'},
  {name: 'Item 17', desc: 'Description for item 17'},
  {name: 'Item 18', desc: 'Description for item 18'},
  {name: 'Item 19', desc: 'Description for item 19'},
  {name: 'Item 20', desc: 'Description for item 20'},
  {name: 'Item 21', desc: 'Description for item 21'},
  {name: 'Item 22', desc: 'Description for item 22'},
  {name: 'Item 23', desc: 'Description for item 23'},
  {name: 'Item 24', desc: 'Description for item 24'},
  {name: 'Item 25', desc: 'Description for item 25'},
  {name: 'Item 26', desc: 'Description for item 26'},
  {name: 'Item 27', desc: 'Description for item 27'},
  {name: 'Item 28', desc: 'Description for item 28'},
  {name: 'Item 29', desc: 'Description for item 29'},
  {name: 'Item 30', desc: 'Description for item 30'},
];

function App(): React.JSX.Element {
  const [itemsToShow, setItemsToShow] = useState(rowItems);
  const [inputText, setInputText] = useState('');

  const renderItem = (item: RowItem) => {
    return <RowItemCard item={item} />;
  };

  const filterItems = (text: string) => {
    setInputText(text)
    const newItems = rowItems.filter(item => item.name.includes(text))
    setItemsToShow(newItems)
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 8}}>
    <TextInput value={inputText} onChangeText={(newText) => filterItems(newText)} style={{borderColor: 'black', borderWidth: 1, color: 'black'}}/>
      <LegendList
        data={itemsToShow}
        recycleItems={true}
        contentContainerStyle={{gap: 8, padding: 8}}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}

export default App;




interface RowItemProps {
  item: RowItem;
}
const RowItemCard = (props: RowItemProps) => {
  const colors = [
    'red',
    'blue',
    'orange',
    'yellow',
    'green',
    'pink',
    'teal',
    'black',
    'grey'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <View style={{padding: 20, borderRadius: 4, borderColor: 'black', borderWidth: 1, overflow: 'hidden'}}>
      <View style={{height: 200, backgroundColor: randomColor}} />
      <Text style={{color: 'black'}}>{props.item.name}</Text>
      <Text style={{color: 'black'}}>{props.item.desc}</Text>
    </View>
  );
};
