import Flow from './Flow'

export default ({ isAHuman, isBooked }) => (
  <div>
    <Flow condition={isAHuman}
          yes={<Flow condition={isBooked} yes={'Reject'} no={'Conference'} />}
          no={'You\'r not a Human!'} />
  </div>
)