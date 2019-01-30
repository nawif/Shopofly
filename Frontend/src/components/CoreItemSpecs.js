import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { CoreSpec } from './'

const CoreItemSpecs = ({ specs }) => {
  return getSpecifications(specs)
}

const getSpecifications = (specs) => {
  if(!specs || specs.length < 0) {
    return null
  }

  const { row } = styles

  let Specifications = []

  for(let i = 0; i < specs.length; i++) {
    console.log("I is: " + i)
    Specifications.push(
      <View style={row} key={i}>
        <CoreSpec
          specKey={specs[i].specKey}
          specValue={specs[i].specValue}
        />
        {
          ++i < specs.length ? (
            <CoreSpec
              specKey={specs[i].specKey}
              specValue={specs[i].specValue}
            />
          ) : null
        }
      </View>
    )
  }

  return Specifications
}

const styles = {
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

export { CoreItemSpecs }
