import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Yehowa Asem Herbal Hospital',
        description: 'One of the leading herbal hospital in Accra',
        imageUrl: 'https://atu.edu.gh/wp-content/uploads/2024/07/2L4A8623-1024x683.jpg',
        address: 'Anyah Police Station, Awoshie, 236 Anyaa Market St, Accra',
        loaction: {
            lat: 5.6004513,
            lng: -0.2886394
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Accra Technical University',
        description: 'One of the leading herbal hospital in Accra',
        imageUrl: 'https://atu.edu.gh/wp-content/uploads/2024/07/2L4A8623-1024x683.jpg',
        address: 'Barnes Rd, Accra',
        loaction: {
            lat: 5.6004513,
            lng: -0.2886394
        },
        creator: 'u2'
    },
    
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return (
    <PlaceList items={loadedPlaces} />
  )
};

export default UserPlaces;
