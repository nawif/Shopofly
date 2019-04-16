import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { CoreSpec } from '../'

export const CoreItemSpecs = ({ specs }) => {
  return getSpecifications(specs)
}

const getSpecifications = (specs) => {
  if(!specs || specs.length < 0) {
    return null
  }

  const { row } = styles

  let Specifications = []

  // This for loop adds a row for 2 labels to make 2 specifications (at most)
  // appear in 1 row.
  for(let i = 0; i < specs.length; i++) {
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
