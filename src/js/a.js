const Vendor = [
    {
        shipmentId: 123,
        description: 'sddd',
        location: 'O',
        date: 'ssdf',
        time: 'ssdff'
    },
    {
        shipmentId: 134,
        description: 'gihdind',
        location: 'D',
        date: 'sgggg',
        time: 'kmkkd'
    }
];

registerHelper = vendor => {
    var out = '';
    for (var i = 0; i < vendor.length; i++) {
        out =
            out +
            '<tr>' +
            `<th scope="row"> ${vendor[i].shipmentId} </th>
            <td> ${vendor[i].description} </td>]
            <td> ${vendor[i].location} </td>
            <td> ${vendor[i].date} </td>
            <td> ${vendor[i].time} </td>` +
            '</tr>';
    }
    return out;
};

console.log(registerHelper(Vendor));
