import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Yehowa Asem Herbal Hospital',
        description: 'One of the leading herbal hospital in Accra',
        imageUrl: 'https://scontent.facc5-2.fna.fbcdn.net/v/t39.30808-6/232051105_111570881172429_8669021398760155460_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeE5_AxKb1wVcfR8F_XA6AAYaFN7-FftUEpoU3v4V-1QSn-Ci_t-0Gn8C51rlM1wNzbOaNthDuMgiIBS8U1uVMZ_&_nc_ohc=RmDH9DeD91wQ7kNvgGly78Z&_nc_zt=23&_nc_ht=scontent.facc5-2.fna&oh=00_AYAXVkYZkATtZxPF9hfgKy6dyO4TfV45m9mZ6BrYyJnPjA&oe=66CC5488',
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

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true); 
  const placeId = useParams().placeId;

  

  const [formState, inputHandler, setFormData] = useForm({
    title:{
      value: '',
      isValid: false
    },
    description:{
        value: '',
        isValid: false
    }
  }, false);

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  
  useEffect(() => {

    if(identifiedPlace) {
      setFormData({
        title:{
            value: identifiedPlace.title,
            isValid: true
          },
          description:{
              value: identifiedPlace.description,
              isValid: true
          }
      }, 
      true
    ); 
    }
    setIsLoading(false);
      
  }, [setFormData, identifiedPlace]);
 
  const placeUpdateSubmitHandler = event =>{
    event.preventDefault();
    console.log(formState.inputs);
  };


  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
        <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
        <div className="center">
          <h2>Loading..........</h2>
        </div>
      );
  }

  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
