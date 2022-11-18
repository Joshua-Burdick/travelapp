
CREATE DATABASE [IF NOT EXISTS] MyTravelAppDB

use MyTravelAppDB

create table Users(UserID int auto_increment, FirstName varchar(20), LastName varchar(20), Username varchar(20), Password varchar(20), Email varchar(40), Phone varchar(15), Country varchar(20), State varchar(20), Age int, primary key(UserID));

