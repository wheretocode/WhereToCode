import React from 'react';
import { Table, TableBody, TableHeader, TableCell, TableRow } from 'grommet';

const NetworkTableGeneral = props => {
    const borderStyle = {
        "color": "gold",
        "size": "small",
        "style": "solid",
        "side": "bottom"
    }

    const borderStyleCell = {
        ...borderStyle,
        "side": "right"
    }

    return(
        <Table>
            <TableHeader>
                <TableRow>

                    <TableCell scope="col" border={borderStyle}>
                        <strong>Network General Info</strong>
                    </TableCell>

                    <TableCell scope="col" border={borderStyle}></TableCell>

                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        ISP
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.client.isp}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Current IP
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.client.ip}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Server Host
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.server.host}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Server Location
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.server.location}</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Server Distance
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.server.distanceMi} mi</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default NetworkTableGeneral;