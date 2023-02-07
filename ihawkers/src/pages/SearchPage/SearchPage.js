import React, {useState, useContext} from 'react'
import Navbar from '../../components/Navbar'
import Searchbar from '../LandingPage/Searchbar'
import Content from './Content'
import { Container, Box, Button, Stack} from '@mui/material'
import { HawkerContext } from '../../context/HawkerContext'
import Footer from '../../components/Footer'
import Fade from 'react-reveal/Fade';
export default function SearchPage() {
  const {hawkerCentres} = useContext(HawkerContext)
  const [filteredList, setFilteredList] = useState(hawkerCentres)

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...hawkerCentres];
    console.log(updatedList)
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name_of_centre.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  
  return (
    <>
     <Navbar />
     <Container>
        <Box sx={{mt: 15, mb: 5}}>
            <Searchbar filterBySearch={filterBySearch} size="medium"/>
        </Box>
        <Stack direction="row" justifyContent="center" spacing={10}>
            <Button variant="contained" onClick={{}}>HAWKER CENTRE</Button>
            <Button variant="contained" onClick={{}} >DELICIOUS FOOD</Button>
        </Stack>
        <Fade>
          <Content filteredList={filteredList}/>
        </Fade>
     </Container>
     <Footer/>
    

    </>
  )
}
