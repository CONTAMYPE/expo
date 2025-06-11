import { Link, Modal, Stack } from 'expo-router';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [isOpenC, setIsOpenC] = useState(false);
  const [isOpenD, setIsOpenD] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Index</Text>
      <Link href="/modal" style={{ marginVertical: 12, fontSize: 16 }}>
        Link to Modal
      </Link>
      <Button
        title="Open Modal A"
        onPress={() => {
          setIsOpenA(true);
        }}
      />
      <Button
        title="Open Modal B"
        onPress={() => {
          setIsOpenB(true);
        }}
      />
      <Button
        title="Open Modal C"
        onPress={() => {
          setIsOpenC(true);
        }}
      />
      <Button
        title="Open Modal D"
        onPress={() => {
          setIsOpenD(true);
        }}
      />

      <Modal
        visible={isOpenA}
        onClose={() => {
          setIsOpenA(false);
        }}
        animationType="slide"
        presentationStyle="pageSheet"
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}>
        <Text>Modal A</Text>
        <Button
          title="Close Modal A"
          onPress={() => {
            setIsOpenA(false);
          }}
        />
        <Button
          title="Open Modal B"
          onPress={() => {
            setIsOpenB(true);
          }}
        />
      </Modal>
      <Modal
        visible={isOpenB}
        onClose={() => {
          setIsOpenB(false);
        }}
        animationType="slide"
        presentationStyle="pageSheet"
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Modal B</Text>
      </Modal>
      {isOpenC && (
        <Modal
          visible={isOpenC}
          onClose={() => {
            setIsOpenC(false);
          }}
          animationType="fade"
          presentationStyle="formSheet"
          style={{
            flex: 1,
            backgroundColor: 'orange',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Modal C - formSheet</Text>
        </Modal>
      )}
      {isOpenD && (
        <Modal
          visible={isOpenD}
          onClose={() => {
            setIsOpenD(false);
          }}
          animationType="slide"
          presentationStyle="overFullScreen"
          transparent
          style={{
            backgroundColor: 'pink',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Modal D</Text>
          <Button
            title="Unmount this modal"
            onPress={() => {
              setIsOpenD(false);
            }}
          />
        </Modal>
      )}
    </View>
  );
}
