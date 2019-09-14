import React from 'react';
import { Table, TableBody, TableHeader, TableCell, TableRow } from 'grommet';

const NetworkTableSpeeds = props => {
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
        <Table margin='large'>
            <TableHeader>
                <TableRow>

                    <TableCell scope="col" border={borderStyle}>
                        <strong>Network Speed Info</strong>
                    </TableCell>

                    <TableCell scope="col" border={borderStyle}></TableCell>
                    <TableCell scope="col" border={borderStyle}></TableCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Download Speeds
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.download} Mbps</TableCell>
                    <TableCell border={borderStyleCell}>{props.data.originalDownload} Bps</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Upload Speeds
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.upload} Mbps</TableCell>
                    <TableCell border={borderStyleCell}>{props.data.originalUpload} Bps</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell scope="row" border={borderStyleCell}>
                        Ping Speed
                    </TableCell>
                    <TableCell border={borderStyleCell}>{props.data.server.ping} ms</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default NetworkTableSpeeds;