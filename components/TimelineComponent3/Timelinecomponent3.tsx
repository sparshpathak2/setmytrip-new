'use client'
import { Timeline, Image, Text, Title, Container, ThemeIcon, List, Flex, Badge, Divider, Button, Card, AspectRatio, Center, CardSection } from '@/lib/mantineui';
import '@/styles/globals.css';
import { IconArrowUpRight, IconCalendar, IconCalendarEvent, IconCircleCheck, IconCircleDashed, IconCreditCard, IconDots, IconDownload, IconHeart, IconMapPin, IconPoint, IconPointFilled, IconRoad, IconStarFilled, IconUserHeart, IconUsers } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import PageContent from '@/components/PageContent/PageContent';
import ItrListItemSchedule from '../ItrListItemScheduleComponent/ItrListItemScheduleComponent';
import StaysCardComponent from '../StaysCardComponent/StaysCardComponent';

const TimelineComponent3 = ({ itrs }) => {
  const listIds = itrs[0].relations
  // console.log(listIds[0].id)
  // console.log(stays)
  const [listItems, setListItems] = useState([])
  const [list, setList] = useState(null)
  const [pageData, setPageData] = useState([])
  const [staysListItems, setStaysListItems] = useState([])
  // const [listContent, setListContent] = useState([])
  const [itrCategory, setitrCategory] = useState([])
  const [data, setData] = useState(null)


  // useEffect(() => {
  //   const fetchDataOne = () => {
  //     listIds?.forEach(item => {
  //       fetch(`http://localhost:3000/api/notion-list-items?listid=${item.id}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setListItems(prevData => [...prevData, data.notionPageData])
  //         })
  //     });
  //   };

  //   const fetchDataTwo = async () => {
  //     listIds?.forEach(item => {
  //       fetch(`http://localhost:3000/api/notion-pages/${item.id}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setPageData(prevData => [...prevData, data])
  //         })
  //     });
  //   };

  //   const fetchDataThree = async () => {
  //     listIds?.forEach(item => {
  //       fetch(`http://localhost:3000/api/notion-list-stays?listid=${item.id}`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setStaysListItems(prevData => [...prevData, data.notionPageData.databasePages])
  //         })
  //     });
  //   };

  //   // const fetchDataThree = async () => {
  //   //   listIds?.forEach(item => {
  //   //     fetch(`http://localhost:3000/api/notion-page-content?itemId=${item.id}`)
  //   //       .then((res) => res.json())
  //   //       .then((data) => {
  //   //         setListContent(prevData => [...prevData, data])
  //   //       })
  //   //   });
  //   // };

  //   const init = async () => {
  //     await Promise.all([fetchDataOne(), fetchDataTwo(), fetchDataThree()]);
  //     // setLoading(false);
  //   };

  //   init();


  // }, [])

  useEffect(() => {
    const fetchDataOne = () => {
      
        fetch(`http://localhost:3000/api/notion-list-items?listid=${listIds[0].id}`)
          .then((res) => res.json())
          .then((data) => {
            setListItems(data)
          })
      
    };

    const fetchDataTwo = async () => {
      
        fetch(`http://localhost:3000/api/notion-pages/${listIds[0].id}`)
          .then((res) => res.json())
          .then((data) => {
            setPageData(data)
          })
      
    };

    const fetchDataThree = async () => {
      
        fetch(`http://localhost:3000/api/notion-list-stays?listid=${listIds[0].id}`)
          .then((res) => res.json())
          .then((data) => {
            setStaysListItems(data)
          })
     
    };

    // const fetchDataThree = async () => {
    //   listIds?.forEach(item => {
    //     fetch(`http://localhost:3000/api/notion-page-content?itemId=${item.id}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         setListContent(prevData => [...prevData, data])
    //       })
    //   });
    // };

    const init = async () => {
      await Promise.all([fetchDataOne(), fetchDataTwo(), fetchDataThree()]);
      // setLoading(false);
    };

    init();


  }, [])


  // console.log(listItems)
  // console.log(pageData)
  // console.log(listContent)
  // console.log(staysListItems)


  // useEffect(() => {
  //   listIds?.forEach(item => {
  //     // console.log(item); // Synchronous operation
  //     // fetch(`http://localhost:3000/api/notion-list-items?listid=${item.id}`)
  //     fetch(`http://localhost:3000/api/notion-list-items?listid=508e27df-b143-450c-a668-b9ee89567328`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //       // setLoading(false)
  //       // const resListItems = await fetch('http://localhost:3000/api/notion-list-items')
  //       // const listItems = await resListItems.json()
  //       setListItems(data)
  //       testArray.push(data)

  // // console.log(`This is the testArray: ${testArray}`)
  // console.log(`This is the testArray: ${listItems}`)
  //     })
  // });
  // }, [])




  // console.log(`This is the testArray(outside useeffect): ${testArray}`)

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/notion-list-items')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //       // setLoading(false)
  //       // const resListItems = await fetch('http://localhost:3000/api/notion-list-items')
  //       // const listItems = await resListItems.json()
  //       setListItems(data.databasePages)
  //       console.log(listItems)
  //     })
  // }, [])

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/notion-list?slug=${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setData(data)
  //       // setLoading(false)
  //   //     const resList = await fetch(`http://localhost:3000/api/notion-list?slug=${slug}`)
  //   // const list = await resList.json() 
  //       setList(data.databasePages)
  //       // console.log(list)
  //     })
  // }, [])

  console.log(listItems)
  // console.log(list)


  return (
    <>
    <p>hello world</p>
      <Title>
            {listItems?.notionPageData?.itrItemsList[0].itrItems[0].title}
      </Title>

    </>
  )

}

export default TimelineComponent3

function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function setError(error: unknown) {
  throw new Error('Function not implemented.');
}

