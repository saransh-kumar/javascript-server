**How to request gets served ???**

*We need a proper client-server architecture in order to perform request and get response from server and reguest get served.* 

Three client-server architecture :
1. Client - It is a user system where we can make request to the server using internet. For example : Amazon is a client website where any particular account request for purchase and then pay amount in order to complete the request.
2. Internet - It is an international network which is available to everyone and anyone can use it in order to access the server and databases.
3. Server - It is remotely available account which provide us all data and the feature provided by the server i.e. Azure, AWS all over world. 

There are two types of data transfer protocol that we mostly use:
1. UDP - User Datagram Protocol
2. TCP - Transmission Control Protocol

The key difference between them is that **TCP rigorously checks for errors** and guarantees in-order-delivery of traffic while **UDP does not and relies on higher layer protocols for error and flow management**.
UDP comes in handy whenever an unacknowledged transfer is required between data sending and receiving applications. **UDP is typically used for broadcast and multicast traffic, real-time traffic** (VoIP, IP Video, etc.) or for stateless communications such as DNS. UDP is pretty fast but doesn’t guarantee delivery or ordering.
Then there’s TCP which is a connection-oriented protocol used to establish and maintain a connection until application programs at each end have finished exchanging data. TCP segments data into packets and provides a reliable data-transfer service. It’s used for bulk data transfer and for interactive data applications. TCP dominates most IP networks nowadays (90% of all traffic).
The growing load on IP networks is putting a lot of pressure of TCP traffic to “deliver the goods” or packets so to speak. Unlike UDP, TCP gets impacted by loss, latency and incorrect configurations. TCP performance is something that simply cannot be overlooked if end-user quality of experience is to be maintained in this day and age of heavy data traffic. Exactly knowing one’s data transfer protocol or troubleshooting TCP issues in and out should be every service providers’ mantra. This whole explain how a request get served.
