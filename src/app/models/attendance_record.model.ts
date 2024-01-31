export interface IAttendanceRecord {
    attendance_id?: number;
    student: number; 
    entry_time: string;
    exit_time: string;
    status: 'Present' | 'Absent' | 'Late' | 'Excused'; 
    shift: number; 
}