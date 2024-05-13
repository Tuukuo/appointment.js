// Develop a system for scheduling appointments at a healthcare facility.
//  Consider factors like doctor availability, patient preferences, and appointment reminders.
class Appointment {
    constructor(doctorsDetails,patientsDetails,appointmentDate) {
        this.doctorsDetails=[];
        this.patientsDetails =[];
         this.appointmentDate= appointmentDate;
       }
       addPatientDetails(name, age, condition, preferences){
        const patientDetails= {
            name: name,
            age: age,
            condition: condition,
            preferences: preferences
        }
        this.patientsDetails.push(patientDetails)
       }
       addDoctors(name, skills, available=true){
        const doctordetails = {
            name: name,
            skills: skills
        }
        this.doctorsDetails.push(doctordetails)
        this.doctorsDetails.available.forEach(item => {
            if (doctorsDetails.available == true){
                console.log(`${patientDetails.name} is to be seen by ${doctorDetails.name} on ${this.appointmentDate}`)
            }
            else{
                console.log("Doctor is not available")
            }
            
        });

    
       }
    }

    const schedule = new Appointment()
    schedule.addPatientDetails("Mary Mkuu",23, "heart condition", )
    schedule.addDoctors("Doctor Kimani", "Cardiologist")
    console.log(schedule)
    
   














