import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../redux/store';
import {fetchEvents} from '../Redux/calendarSlice';
import StatsCard from '../Components/StatsCard';

const Calendar = () => {
  const dispatch: AppDispatch = useDispatch();
  const {events} = useSelector((state: RootState) => state.calendar);
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  const handleDayPress = (day: {dateString: React.SetStateAction<string>}) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <FontAwesome name="menu" size={24} color="white" />
        <Text style={styles.primaryText}>Hello Nouman</Text>
        <FontAwesome name="notifications" size={24} color="#DA3171" />
      </View>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={styles.officeTime}>
            <Text style={styles.secondaryTitleText}>Office Time</Text>
            <Text style={styles.time}>10:30:00</Text>
            <Text style={styles.secondaryText}>{today}</Text>
          </View>
          <View style={styles.checkTime}>
            <View style={styles.checkColumn}>
              <Text style={styles.secondaryTitleText}>Check-In</Text>
              <Text style={styles.secondaryText}>10:54 AM</Text>
              <Text style={styles.secondaryTitleText}>Check-Out</Text>
              <Text style={styles.secondaryText}>7:34 PM</Text>
            </View>
            <View style={styles.checkColumn}>
              <Text style={styles.secondaryTitleText}>Work Time</Text>
              <Text style={styles.secondaryText}>6h 30m</Text>
              <Text style={styles.secondaryTitleText}>Break Time</Text>
              <Text style={styles.secondaryText}>1 hour</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <StatsCard
            iconName="calendar-month"
            iconColor="purple"
            value="18"
            title="Attendance"
          />
          <StatsCard
            iconName="access-alarm"
            iconColor="skyblue"
            value="48h"
            title="Monthly Hours"
          />
          <StatsCard
            iconName="group-remove"
            iconColor="green"
            value="3"
            title="Monthly Late"
          />
          <StatsCard
            iconName="ballot"
            iconColor="yellow"
            value="18"
            title="Remaining Leaves"
          />
        </View>
        <View style={styles.calendarWrapper}>
          <RNCalendar
            theme={{
              backgroundColor: 'grey',
              calendarBackground: 'grey',
              dayTextColor: 'white',
              monthTextColor: 'white',
              arrowColor: 'white',
              textSectionTitleColor: 'skyblue',
              todayTextColor: '#DA3171',
              textDisabledColor: 'gray',
              selectedDayBackgroundColor: 'red',
              selectedDayTextColor: 'white',
              textDayFontSize: 12,

            }}
            hideExtraDays={true}
            style={styles.calendar}
            markedDates={Object.keys(events).reduce((acc: any, date) => {
              acc[date] = {
                marked: true,
                dotColor: '#DA3171',
                selectedColor: '#DA3171',
                selected: date === selectedDate,
              };
              return acc;
            }, {})}
            onDayPress={handleDayPress}
          />
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Events on {selectedDate}</Text>
            {events[selectedDate]?.map((event, index) => (
              <Text style={styles.modalText} key={index}>
                {event.description}
              </Text>
            )) || <Text style={styles.modalText}>No Events</Text>}
            <Button
              title="Close"
              color="#DA3171"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  primaryText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerContainer: {
    backgroundColor: '#DA3171',
    height: '26%',
    borderRadius: 10,
    marginBottom: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  time: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  officeTime: {
    alignItems: 'center',
    marginBottom: 10,
  },
  checkTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:-5,
  },
  checkColumn: {
    alignItems: 'center',
  },
  workTime: {
    marginLeft: 20,
  },
  secondaryText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    textAlign: 'center',
  },
  secondaryTitleText: {
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 5,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarWrapper: {
    marginTop: -10,
  },
  calendar: {
    borderRadius: 20,
    overflow: 'hidden',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#2C2C2C',
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA3171',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  modalEvent: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 2,
  },
  closeButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
