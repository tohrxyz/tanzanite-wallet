import { View, useWindowDimensions } from "react-native";
import { TabView, TabBar, Route, SceneRendererProps, SceneMap } from 'react-native-tab-view';
import { useState } from "react";
import HistoryScene from "../WalletScenes/HistoryScene";
import ReceiveScene from "../WalletScenes/ReceiveScene";
import SendScene from "../WalletScenes/SendScene";

export default function WalletScreen () {
  const [index, setIndex] = useState(1);
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: 'send', title: 'Send' },
    { key: 'history', title: 'Home'},
    { key: 'receive', title: 'Receive' },
  ]);
  
  const renderScene = SceneMap({
    receive: ReceiveScene,
    history: HistoryScene,
    send: SendScene
  });

  return (
    <View className="w-full flex flex-col items-center">
      <TabView 
        onIndexChange={setIndex} 
        navigationState={{ index, routes }} 
        renderScene={renderScene}
        initialLayout={{ width: layout.width }}
        className="w-full min-h-[90vh]"
        tabBarPosition="top"
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'rgb(249 115 22)' }}
            style={{ backgroundColor: '#45474b' }}
            labelStyle={{ color: 'white', fontSize: 14 }}
            activeColor="rgb(249 115 22)"
            />)}
      />
    </View>
  )
}