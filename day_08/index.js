const students = [
    {
        id: 1,
        name: "Nathanial Doig",
        email: "ndoig0@spotify.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "129.144.46.205"
    },
    {
        id: 2,
        name: "Barry Gloucester",
        email: "bgloucester1@sogou.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "231.193.196.242"
    },
    {
        id: 3,
        name: "Bettye Loan",
        email: "bloan2@whitehouse.gov",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "113.245.205.111"
    },
    {
        id: 4,
        name: "Florry Handasyde",
        email: "fhandasyde3@free.fr",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "225.141.25.90"
    },
    {
        id: 5,
        name: "Sancho Godar",
        email: "sgodar4@dagondesign.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "122.181.193.187"
    },
    {
        id: 6,
        name: "Scarface Finkle",
        email: "sfinkle5@last.fm",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "71.34.214.41"
    },
    {
        id: 7,
        name: "Gale Meeron",
        email: "gmeeron6@ihg.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "229.9.241.14"
    },
    {
        id: 8,
        name: "Courtnay Stiff",
        email: "cstiff7@youtube.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "178.78.142.78"
    },
    {
        id: 9,
        name: "Kristopher Hanby",
        email: "khanby8@imageshack.us",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "1.119.170.219"
    },
    {
        id: 10,
        name: "Dallas Fireman",
        email: "dfireman9@shareasale.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "240.139.48.45"
    },
    {
        id: 11,
        name: "Giorgio Cripps",
        email: "gcrippsa@psu.edu",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "16.53.213.37"
    },
    {
        id: 12,
        name: "Noemi Rissom",
        email: "nrissomb@google.ru",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "57.88.77.10"
    },
    {
        id: 13,
        name: "Maximo Pounder",
        email: "mpounderc@cpanel.net",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "114.49.182.89"
    },
    {
        id: 14,
        name: "Vassily Carbin",
        email: "vcarbind@odnoklassniki.ru",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "215.101.121.113"
    },
    {
        id: 15,
        name: "Robinia Hynde",
        email: "rhyndee@mac.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "57.102.117.233"
    },
    {
        id: 16,
        name: "Meggi Lanon",
        email: "mlanonf@upenn.edu",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "119.87.118.156"
    },
    {
        id: 17,
        name: "Ortensia McIllrick",
        email: "omcillrickg@si.edu",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "51.29.186.238"
    },
    {
        id: 18,
        name: "Barris Flarity",
        email: "bflarityh@weibo.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "197.222.34.1"
    },
    {
        id: 19,
        name: "Ginnifer McGroarty",
        email: "gmcgroartyi@amazonaws.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "185.199.131.93"
    },
    {
        id: 20,
        name: "Toddie Cobb",
        email: "tcobbj@desdev.cn",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "120.128.80.238"
    },
    {
        id: 21,
        name: "Beilul Lodeke",
        email: "blodekek@purevolume.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "232.236.223.242"
    },
    {
        id: 22,
        name: "Edi Lindores",
        email: "elindoresl@ning.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "26.99.68.126"
    },
    {
        id: 23,
        name: "Melodee Wythill",
        email: "mwythillm@macromedia.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "239.59.1.191"
    },
    {
        id: 24,
        name: "Merrill Shade",
        email: "mshaden@google.nl",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "77.154.140.178"
    },
    {
        id: 25,
        name: "Blanch Fishbourne",
        email: "bfishbourneo@mysql.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "155.171.105.118"
    },
    {
        id: 26,
        name: "Marsh Leadbeater",
        email: "mleadbeaterp@alibaba.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "239.187.235.186"
    },
    {
        id: 27,
        name: "Rudy Lendrem",
        email: "rlendremq@slate.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "46.216.210.28"
    },
    {
        id: 28,
        name: "Reinhard Zanni",
        email: "rzannir@goo.ne.jp",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "117.219.57.207"
    },
    {
        id: 29,
        name: "Gilligan Margetson",
        email: "gmargetsons@slashdot.org",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "233.92.254.183"
    },
    {
        id: 30,
        name: "Rhea Romain",
        email: "rromaint@kickstarter.com",
        course: "B.Tech",
        section: "CSE-18",
        ip_address: "107.191.185.1"
    }
];


// Child Component
function Student(props) {

    return (
        <div className="student-card">

            <h2>{props.name}</h2>

            <p>
                <b>ID:</b> {props.id}
            </p>

            <p>
                <b>Email:</b> {props.email}
            </p>

            <p>
                <b>Course:</b> {props.course}
            </p>

            <p>
                <b>Section:</b> {props.section}
            </p>

            <p>
                <b>IP Address:</b> {props.ip_address}
            </p>

        </div>
    );
}


// Parent Component
function App() {

    return (
        <div className="container">

            <h1 className="heading">
                Student Details
            </h1>

            <div className="student-container">

                {students.map((student) => (

                    <Student
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        email={student.email}
                        course={student.course}
                        section={student.section}
                        ip_address={student.ip_address}
                    />

                ))}

            </div>

        </div>
    );
}


// React Root
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);