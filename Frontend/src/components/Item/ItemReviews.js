import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { subtitleStyle } from '../../Styles'

const defaultCardHeight = 130

export const ItemReviews = (props) => {
  const { container, alignStyle, cardsContainer, cardStyle } = styles

  const cards = [
    {
      reviewer: 'Osama Aloqaily',
      rating: 4.8,
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '27 jan 2019'
    },
    {
      reviewer: 'Nawaf Alquaid',
      rating: 4.7,
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '27 jan 2019'
    },
    {
      reviewer: 'Osama Aloqaily',
      rating: 4.8,
      feedback: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '27 jan 2019'
    }
  ]

	return (
    <View>
      <Text style={[subtitleStyle, alignStyle]}>Reviews</Text>


      <View style={cardsContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          { getCards(cards) }
        </ScrollView>
      </View>
    </View>
	)
}

const getCards = (cards) => {
  const {
    cardStyle,
    reviewerStyle,
    cardContainerStyle,
    rowStyle,
    ratingStyle,
    ratingNumStyle,
    bodyStyle,
    dateStyle,
    readStyle,
  } = styles

  return cards.map((element, index) => {
    return (
      <View style={cardStyle} key={index}>
        <View style={cardContainerStyle}>
          <View style={rowStyle}>
            <Text style={reviewerStyle}>{element.reviewer}</Text>

            <View style={ratingStyle}>
              <Image source={require('../../../assets/star.png')}/>
              <Text style={ratingNumStyle}>{element.rating}</Text>
            </View>
          </View>

          <Text style={bodyStyle}>
            { element.feedback.substring(0, 155)+'...' }
          </Text>

          <View style={rowStyle}>
            <Text style={dateStyle}>{element.date}</Text>
            <Text style={readStyle}>Read full review</Text>
          </View>
        </View>
      </View>
    )
  })
}

const styles = {
  container: {
    marginBottom: '20%'
  },
  alignStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  cardsContainer: {
    height: defaultCardHeight + 10,
    marginTop: 10,
    marginBottom: 30,
  },
  cardStyle: {
    flex: 1,
    width: 160,
    height: defaultCardHeight,
    borderWidth: 1,
    borderRadius: 13,
    borderColor: '#CFCFCF',
    marginLeft: 10,
  },
  cardContainerStyle: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewerStyle: {
    color: '#2B2B2B',
    fontSize: 10,
    fontFamily: 'Cairo-SemiBold'
  },
  ratingStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumStyle: {
    fontSize: 10,
    fontFamily: 'Cairo-Bold',
    color: '#F3C60B',
    paddingLeft: 5
  },
  bodyStyle: {
    color: '#A1A1A1',
    fontSize: 7,
    fontFamily: 'Cairo-SemiBold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  dateStyle: {
    color: '#CFCFCF',
    fontSize: 7,
    fontFamily: 'Cairo-SemiBold'
  },
  readStyle: {
    color: '#3061E9',
    fontSize: 8,
    fontFamily: 'Cairo-Bold'
  }
}
