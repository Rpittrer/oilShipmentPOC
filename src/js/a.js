const Vendor = {
    details: [
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
    ]
};

registerHelper = (vendor => {
    var out = '';
    for (var i = 0; i < vendor.details.length; i++) {
        out = out +
            '<tr>' +
            `<th scope="row"> ${vendor.details[i].shipmentId} </th>
            <td> ${vendor.details[i].description} </td>]
            <td> ${vendor.details[i].location} </td>
            <td> ${vendor.details[i].date} </td>
            <td> ${vendor.details[i].time} </td>` +
            '</tr>';
    }
    return out;
});

console.log(registerHelper(Vendor));
