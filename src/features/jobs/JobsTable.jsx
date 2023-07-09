import Table from "../../ui/Table";

const JobsTable = () => {
  return (
    <div>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
      </Table>
    </div>
  );
};

export default JobsTable;
