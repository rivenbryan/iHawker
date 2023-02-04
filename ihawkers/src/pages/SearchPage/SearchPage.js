import React, {useState, useContext} from 'react'
import Navbar from '../../components/Navbar'
import Searchbar from '../LandingPage/Searchbar'
import Content from './Content'
import { Container, Box } from '@mui/material'
import { HawkerContext } from '../../context/HawkerContext'
import Footer from '../../components/Footer'
export default function SearchPage() {
  const {hawkerCentres} = useContext(HawkerContext)
  console.log(hawkerCentres)
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
        <Box sx={{mt: 15}}>
            <Searchbar filterBySearch={filterBySearch} size="medium"/>
        </Box>
        <Content filteredList={filteredList}/>
     </Container>
     <Footer/>
    

    </>
  )
}
