import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';

interface StatCardProps {
  iconName: string;
  iconColor: string;
  value: string;
  title: string;
}

const StatsCard: React.FC<StatCardProps> = ({
  iconName,
  iconColor,
  value,
  title,
}) => {
  return (
    <View style={styles.statBox}>
      <View style={styles.iconRow}>
        <FontAwesome name={iconName} size={24} color={iconColor} />
        <Text style={styles.statText}>{value}</Text>
      </View>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statBox: {
    height:'40%',
    width: '48%',
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statTitle: {
    color: 'white',
    fontSize:12,
    marginTop: 5,
  },
  statText: {
    color: 'white',
    marginLeft: 10,
    fontSize:12,
  },
});

export default StatsCard;
