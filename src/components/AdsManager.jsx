import React from 'react'
import styles from './../styles/AdsManager.scss'; 

export default function AdsManager() {
  return (
    <>
    <div className="containerads">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Clicks</th>
                    <th>Priority</th>
                    <th>Impressions</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr className="Priority-200">
                    <td>Shure SE110 in-ear headphones</td>
                    <td>857</td>
                    <td><i className="fas fa-circle"></i>200</td>
                    <td>190</td>
                    <td>
                        <button className="delete"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="Priority-300">
                    <td>Shure SE110 in-ear headphones</td>
                    <td>620</td>
                    <td><i className="fas fa-circle"></i>600</td>
                    <td>478</td>
                    <td>
                        <button className="delete"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="Priority-200">
                    <td>Shure SE110 in-ear headphones</td>
                    <td>500</td>
                    <td><i className="fas fa-circle"></i>300</td>
                    <td>322</td>
                    <td>
                        <button className="delete"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="Priority-600">
                    <td>Shure SE110 in-ear headphones</td>
                    <td>430</td>
                    <td><i className="fas fa-circle"></i>200</td>
                    <td>197</td>
                    <td>
                        <button className="delete"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
                <tr className="Priority-300">
                    <td>Shure SE110 in-ear headphones</td>
                    <td>170</td>
                    <td><i className="fas fa-circle"></i>300</td>
                    <td>299</td>
                    <td>
                        <button className="delete"><i className="fas fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}
