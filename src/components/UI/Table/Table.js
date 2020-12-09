import React, {Component} from 'react';
import './Table.css';
import Badge from '../Badge/Badge';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

class MyTable extends Component{

    state={
        fields: this.props.data.fields,
        data: this.props.data.data,
        sortProperty:"",
        sortOrder:"asc"
    };

    compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    sortChangedHandler(newSortProp,newSortOrder = "asc"){
        
        const prevSortProp = this.state.sortProperty;
        const prevSortOrder = this.state.sortOrder;
        let currentData = this.state.data;
        
        if(prevSortProp === newSortProp)
            newSortOrder = prevSortOrder ==="asc" ? "desc":"asc";
        
        console.log("Current SortOn: "+ newSortProp+", "+ newSortOrder + "*************** Previous SortOn: " + prevSortProp +", " + prevSortOrder);
                
        currentData.sort(this.compareValues(newSortProp, newSortOrder));
        
        console.log(currentData);

        this.setState((prevState) =>
                {
                    return {
                        sortProperty:newSortProp, 
                        sortOrder: newSortOrder,
                        data: currentData  
                    }  
                }
            );


        
    }

    render(){
        const tableHeaders= Object.keys(this.state.fields).map(
            field => {
              let sortingStyle = ["sorting"];
              const sortProp = this.state.sortProperty;
              const sortOrder = this.state.sortOrder;
              
              if(field === sortProp){
                if(sortOrder==="desc"){
                  sortingStyle.push("sorting_desc");
                }
                else{
                  sortingStyle.push("sorting_asc");
                }
              }
              

              return(
                  <th className={sortingStyle.join(" ")} onClick={() => this.sortChangedHandler(field)}>
                    {this.state.fields[field]}                  
                  </th>
              );
            }
        );

        const tableData= this.state.data.map(
            row => {
                    const tableRow = Object.keys(row).map(
                        field => {
                        
                        let badgeStyle="";
                        if(field==="state"){
                          
                          switch(row[field]){
                            case "done":
                              badgeStyle="Green";break;
                            case "in progress":
                              badgeStyle="Yellow";break;
                            case "cancelled":
                              badgeStyle="Red";break;
                            default:
                              break;
                          }

                          return(
                            <td> 
                              <Badge badgetype={badgeStyle} badgetext={row[field]}  />
                            </td>
                            );
                        }
                        else{

                          return(
                            <td> 
                               {row[field]}
                            </td>
                            );

                        }

                       
                      }
                    );

                    return(
                            <tr>
                                {tableRow}
                            </tr>
                            );
                }
        );
       
        return(
          <div className="TableCard">
            <div className="Title">
              <h3>
                {this.props.title}
              </h3>
              <DropdownMenu />
            </div>
            <div className="Table">
                <table >
                    <thead>
                        <tr>{tableHeaders}</tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </table>
            </div>
          </div>
        );
    }
}

export default MyTable;
